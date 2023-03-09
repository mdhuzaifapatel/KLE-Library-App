<LinearGradient
start={{x: 0.0, y: 0.1}}
end={{x: 1, y: 1.0}}
location={[1, 0]}
// colors={['#7881dc', '#b7bef2', '#7881dc', '#7881dc']}
colors={[
  '#002c62',
  // '#00397c',
  // '#005a99',
  // '#2aa8d9',
  // '#0090cd',

  // '#2aa8d9',
  // '#2aa8d9',
  // '#2aa8d9',
  // '#2aa8d9',
  // '#2aa8d9',
  // '#2aa8d9',
  // '#2aa8d9',
  // '#2aa8d9',
  // '#0090cd',
  // '#156da5',
  // '#005a99',
  // '#00397c',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#002c62',
]}
// colors={['#7881dc', '#9ba6f6', '#b7bef2', '#7881dc']}
// colors={['#8cf093', '#a0e8a8', '#a0e8a8']}
// colors={['#BC2C2C', '#e05553', '#f76a68']}
style={{
  flexDirection: 'row',
  height: responsiveHeight(25),
  width: responsiveWidth(90),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: responsiveWidth(4),
  borderWidth: responsiveWidth(0.09),
  borderColor: '#00397c',
  elevation: responsiveHeight(9),
  shadowColor: '#000',
  shadowRadius: responsiveWidth(1),
  marginTop: responsiveHeight(-14.4),
}}>
<View style={{marginTop: responsiveHeight(2.7)}}>
  <View
    style={{
      // width: '55%',
      flex: 1,
      width: responsiveWidth(15),
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: responsiveWidth(14.5),
      // marginTop: responsiveHeight(8.4),
      // marginBottom: responsiveHeight(5.2),
      // marginLeft: responsiveWidth(10),
    }}>
    <Image
      style={{
        height: responsiveHeight(21),
        width: responsiveWidth(33),
        borderRadius: responsiveWidth(3),
        borderColor: '#00397c',
        borderWidth: responsiveWidth(0.09),
      }}
      resizeMode="cover"
      source={require('../assets/images/profile.png')}
    />
  </View>
  {/* <ActionCenter */}
  {/* img_src={require('../assets/images/profile.png')} */}
  {/* // img_text="WithDraw" */}
  {/* /> */}

  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      width: responsiveWidth(60),
      marginLeft: responsiveWidth(51),
      marginTop: responsiveHeight(-18.5),
    }}>
    {/* USN */}
    <Text
      style={{
        marginTop: responsiveHeight(-2),
        fontSize: responsiveFontSize(4),
        fontFamily: 'OpenSans-Bold',
        color: '#00397c',
        // textShadowColor: '#002c62',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 7,
        paddingBottom: responsiveHeight(1),
      }}>
      2KL19EC016
    </Text>

    {/* course */}
    <Text
      style={{
        fontSize: responsiveFontSize(2.2),
        fontFamily: 'OpenSans-Medium',
        // textShadowColor: '#002c62',
        color: '#00397c',
        textShadowRadius: 5,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.2),
          fontFamily: 'OpenSans-Bold',
          // textShadowColor: '#002c62',
          color: '#00397c',
          textShadowRadius: 5,
        }}>
        Course:{' '}
      </Text>{' '}
      B.E
    </Text>

    {/* branch */}
    <Text
      style={{
        fontSize: responsiveFontSize(2.2),
        fontFamily: 'OpenSans-Medium',
        // textShadowColor: '#002c62',
        color: '#00397c',
        textShadowRadius: 5,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.2),
          fontFamily: 'OpenSans-Bold',
          textShadowColor: '#002c62',
          // textShadowColor: '#002c62',
          color: '#00397c',
        }}>
        Branch:{' '}
      </Text>{' '}
      EC
    </Text>

    {/* DOB */}
    <Text
      style={{
        fontSize: responsiveFontSize(2.2),
        fontFamily: 'OpenSans-Medium',
        // textShadowColor: '#002c62',
        color: '#00397c',
        textShadowRadius: 5,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.2),
          fontFamily: 'OpenSans-Bold',
          // textShadowColor: '#002c62',
          color: '#00397c',
          textShadowRadius: 5,
        }}>
        D.O.B:{' '}
      </Text>{' '}
      29/07/2001
    </Text>

    {/* No. Books issued */}
    <Text
      style={{
        fontSize: responsiveFontSize(2.2),
        marginTop: responsiveHeight(1.2),
        fontFamily: 'OpenSans-Medium',
        // textShadowColor: '#002c62',
        color: '#00397c',
        textShadowRadius: 5,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.2),
          fontFamily: 'OpenSans-Bold',

          // textShadowColor: '#002c62',
          color: '#00397c',
          textShadowRadius: 5,
        }}>
        Books issued:{' '}
      </Text>{' '}
      5
    </Text>

    {/* Fine */}
    <Text
      style={{
        fontSize: responsiveFontSize(2.2),
        fontFamily: 'OpenSans-Medium',
        // textShadowColor: '#002c62',
        color: '#00397c',
        textShadowRadius: 5,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.2),
          fontFamily: 'OpenSans-Bold',
          // textShadowColor: '#002c62',
          color: '#00397c',

          textShadowRadius: 5,
        }}>
        Fine amount:{' '}
      </Text>{' '}
      ₹50.54
    </Text>
  </View>
</View>
</LinearGradient>