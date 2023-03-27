import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import WebView from 'react-native-webview';
import {BASE_URL} from '../utils/config';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('kw');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const webViewRef = useRef(null);

  const handleSearch = () => {
    setSearchPerformed(true);
    webViewRef.current && webViewRef.current.reload();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={{flex: 1, flexDirection: 'column', marginTop: scale(-60)}}>
        {/* Backbutton with header */}
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.main,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: scale(-60),
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
              marginTop: scale(-0.9),
              marginLeft: scale(-25),
              textAlign: 'center',
              fontFamily: 'BreezeSans-Bold',
              fontSize: scale(17),
              color: Colors.font,
            }}>
            Search Books
          </Text>
        </View>

        {/* Search Form */}

        <View
          style={{
            flex: 2.5,
            backgroundColor: '#fff',
            marginTop: scale(-20),
            marginBottom: scale(6),
          }}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 10,
                flex: 1,
              }}
            />
            <TouchableOpacity
              onPress={handleSearch}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
                margin: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={{borderColor: 'gray', borderWidth: 1, margin: 10}}>
            <Picker
              selectedValue={searchType}
              onValueChange={(itemValue, itemIndex) =>
                setSearchType(itemValue)
              }>
              <Picker.Item label="Keyword" value="kw" />
              <Picker.Item label="Title" value="ti" />
              <Picker.Item label="Author" value="au" />
              <Picker.Item label="Subject" value="su" />
              <Picker.Item label="ISBN" value="nb" />
              <Picker.Item label="Series" value="se" />
              <Picker.Item label="Call Number" value="callnum" />
            </Picker>
          </View>
          {searchPerformed && (
            <WebView
              source={{
                uri: `${BASE_URL}/cgi-bin/koha/opac-search.pl?q=${searchQuery}&idx=${searchType}`,
              }}
              ref={webViewRef}
              style={{flex: 1, top: hp(-5)}}
            />
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
});
