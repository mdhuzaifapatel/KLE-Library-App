import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio';
import {Colors} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import {Picker} from '@react-native-picker/picker';
import {BASE_URL, BASE_URL_8080} from '../utils/config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('ti');

  // useEffect(() => {
  //   return () => {
  //     setBooks([]);
  //     setQuery('');
  //     setSelectedSearchCriteria('ti');
  //   };
  // }, [1]);

  const handleSearch = () => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    function capitalizeWords(str) {
      return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    axios
      .get(
        `${BASE_URL_8080}/cgi-bin/koha/catalogue/search.pl?count=40&sort_by=title_az&idx=${selectedSearchCriteria}&q=${query}`,
      )
      .then(response => {
        const $ = cheerio.load(response.data);
        const bookList = [];
        $('tr[id^="row"]').each((index, element) => {
          const row = $(element);

          // Extract the desired data from the row
          const title = row.find('.title').text();
          const biblionumber = row.find('input[name="biblionumber"]').val();
          const author = row.find('.author a').text();

          const availability = row
            .find('.results_available_count')
            .text()
            .trim()
            .replace(':', '')
            .split(',');

          const libraryNameText = row
            .find('.result_itype_image img')
            .attr('title')
            .trim();

          const shelvingLoc = row.find('.shelvingloc').first().text().trim();
          const splitParts = shelvingLoc.split('-');
          const bookShelf = splitParts.slice(1).join('-').trim();

          const book = {
            id: biblionumber,
            title,
            author,
            availability,
            libraryNameText,
            bookShelf,
          };

          bookList.push(book);
        });

        if (bookList.length === 0) {
          setBooks({message: 'No books found'});
        } else {
          setBooks(bookList);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const renderBook = ({item}) => {
    return (
      <View
        style={{
          alignSelf: 'center',
          position: 'relative',
          flexDirection: 'column',
          height: hp(19.5),
          width: wp(92),
          borderColor: Colors.mainLight,
          backgroundColor: Colors.mainLight,
          borderRadius: scale(15),
          // marginLeft: wp(2),
          marginTop: hp(1.5),
        }}>
        {/* Title and Icon */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: hp(4.5),
              width: wp(15),
              left: wp(1),
              top: hp(1.5),
            }}
            source={require('../assets/images/book.png')}
            resizeMode="contain"
          />

          <Text
            adjustsFontSizeToFit={true}
            minimumFontScale={0.5}
            style={{
              textAlign: 'left',
              top: hp(1.3),
              fontFamily: 'BreezeSans-Bold',
              color: Colors.font,
              fontSize: responsiveFontSize(2),
              marginLeft: wp(2),
              marginRight: wp(15),
            }}>
            {item.title}
          </Text>
        </View>

        <View style={{}}>
          <Text
            style={{
              textAlign: 'left',
              top: hp(1.3),
              fontFamily: 'BreezeSans-Bold',
              color: '#758283',
              fontSize: responsiveFontSize(1.85),
              marginLeft: wp(18),
              // marginRight: wp(15),
            }}>
            {item.author}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            top: hp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            {/* Location */}
            <View>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: Colors.font2,
                  fontSize: responsiveFontSize(2),
                  right: wp(4),
                  top: hp(0.1),
                  marginBottom: scale(-8),
                }}>
                {item.libraryNameText == 'Stundent Lending LIbrary Books' ? (
                  <Text>Lending Library</Text>
                ) : (
                  <Text>Central Library</Text>
                )}
              </Text>

              {/* Barcode */}
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: Colors.black,
                  fontSize: responsiveFontSize(1.75),
                  right: wp(4),
                  top: hp(1.0),
                  marginBottom: scale(0),
                }}>
                {`${item.availability[0]} , ${item.availability[1]}`}
              </Text>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#333',
                  fontSize: scale(11.5),
                  right: wp(4),
                  top: hp(1.0),
                  marginBottom: scale(0),
                }}>
                {item.bookShelf === '' ? <></> : <>Rack {item.bookShelf}</>}
              </Text>
            </View>

            {/* Available */}
            <View style={{top: hp(0.4), left: wp(4)}}>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#333',
                  fontSize: scale(11.5),
                }}>
                {item.availability[1] === ' None available' ? (
                  <Text style={styles.return2}>Not Available</Text>
                ) : (
                  <Text style={styles.return}>Available</Text>
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={{flex: 1, flexDirection: 'column'}}>
        {/* Backbutton with header */}
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.main,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              top: hp(-4.5),
            }}>
            {/* backbutton */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-left"
                size={scale(23)}
                margin={scale(18)}
                color={Colors.font}
              />
            </TouchableOpacity>

            <View style={{marginLeft: scale(-20)}}>
              <Icon
                name="magnify"
                size={scale(23)}
                margin={scale(18)}
                color={Colors.font}
              />
            </View>

            {/* header Text */}
            <Text
              style={{
                width: scale(150),
                marginLeft: scale(-25),
                textAlign: 'center',
                fontFamily: 'BreezeSans-Bold',
                fontSize: scale(17),
                color: Colors.font,
              }}>
              Search Books
            </Text>
          </View>
        </View>

        {/* Search Form */}
        <View
          style={{
            flexDirection: 'column',
            color: '#fff',
            bottom: hp(12),
            marginHorizontal: wp(2),
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp(2),
            }}>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedSearchCriteria}
                onValueChange={itemValue =>
                  setSelectedSearchCriteria(itemValue)
                }
                style={styles.picker2}>
                <Picker.Item
                  label="Search by:"
                  value="kw"
                  style={styles.picker3}
                />
                <Picker.Item label="Title" value="ti" style={styles.picker2} />
                <Picker.Item label="Author" value="au" style={styles.picker2} />
                <Picker.Item
                  label="Subject"
                  value="su"
                  style={styles.picker2}
                />
                <Picker.Item label="ISBN" value="nb" style={styles.picker2} />
                <Picker.Item label="Series" value="se" style={styles.picker2} />
                <Picker.Item
                  label="Call Number"
                  value="callnum"
                  style={styles.picker2}
                />
              </Picker>
            </View>

            <TextInput
              placeholder="Enter your query here"
              onChangeText={text => setQuery(text)}
              value={query}
              style={{
                flex: 1,
                left: wp(-1.5),
                color: Colors.font2,
                borderColor: Colors.font,
                borderWidth: 1,
                margin: wp(1),
                borderRadius: wp(20),
                fontFamily: 'OpenSans-Medium',
                height: hp(5),

                paddingLeft: wp(5),
                paddingRight: 10,
                // textAlign: 'center', // center the text horizontally
                // textAlignVertical: 'center', // center the text vertically
              }}
              cursorColor={Colors.font2}
              placeholderTextColor={Colors.font2}
            />
          </View>
          <TouchableOpacity onPress={handleSearch}>
            <View style={styles.searchBtn}>
              <Text style={styles.searchBtnText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search results */}
        <View
          style={{
            flex: 2.5,
            backgroundColor: '#fff',
            // marginTop: scale(10),
            marginBottom: hp(-3.8),
            top: hp(-9),
          }}>
          {isLoading ? (
            <Text
              style={{
                color: '#000',
                backgroundColor: '#fff',
                textAlign: 'center',
              }}>
              Loading...
            </Text>
          ) : books.length ? (
            <FlatList
              data={books}
              renderItem={renderBook}
              keyExtractor={(item, index) => index.toString()}
              style={{color: '#fff', top: hp(-1)}}
            />
          ) : isLoading === true ? (
            <Text></Text>
          ) : (
            <Text style={{color: '#000', textAlign: 'center'}}>
              No results found
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  image: {
    width: wp(90),
    height: wp(120),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container2: {
    top: hp(-5),
  },
  text1: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: Colors.font,
  },
  text2: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: Colors.font2,
    marginHorizontal: wp(9),
  },
  red: {
    fontFamily: 'BreezeSans-Bold',
    color: '#DE3C3C',
    fontSize: scale(11.5),
  },
  return: {
    fontFamily: 'BreezeSans-Bold',
    color: '#1FAA59',
    fontSize: scale(13.5),
    borderWidth: scale(5),
  },
  return2: {
    fontFamily: 'BreezeSans-Bold',
    color: '#DE3C3C',
    fontSize: scale(11.5),
  },
  searchBtn: {
    top: hp(0.5),
    alignItems: 'center',
    width: wp(25),
    height: hp(4),
    backgroundColor: Colors.font,
    borderRadius: wp(50),
    left: wp(67),
  },

  searchBtnText: {
    top: hp(0.8),
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'BreezeSans-Bold',
  },
  picker: {
    height: hp(5),
    width: wp(30),
    top: hp(0.5),
    left: wp(-1.8),
    borderColor: Colors.font,
    borderWidth: wp(0.25),
    borderRadius: hp(50),
    // backgroundColor: Colors.white,
    // marginRight: wp(1),
  },

  picker2: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.font,
    top: hp(-0.7),
    backgroundColor: Colors.main2,
  },
  picker3: {
    fontSize: responsiveFontSize(2.1),
    color: Colors.font,
    // backgroundColor: Colors.main2,
    
  },
});
