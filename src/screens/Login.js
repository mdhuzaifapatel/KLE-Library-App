import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../src/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from '../components/Buttons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const Login = ({navigation}) => {
  // const [test, setTest] = useState('Incorrect USN or Password');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}>
      <ScrollView
        style={{paddingHorizontal: 25, backgroundColor: Colors.mainLight}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/klec.png')}
            style={{
              height: hp(35),
              width: wp(70),
              resizeMode: 'contain',
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: 'BreezeSans-Bold',
            fontSize: responsiveFontSize(2.5),
            fontWeight: '500',
            textAlign: 'center',
            color: Colors.font,
            marginBottom: hp(7),
          }}>
          Sign in to your account
        </Text>

        <InputField
          label={'Enter USN or card number'}
          color={Colors.font}
          icon={
            <Ionicons
              name="person-circle-outline"
              size={23}
              color={Colors.font}
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="lock-closed"
              size={22}
              color={Colors.font}
              style={{marginRight: 5}}
            />
          }
          // inputType="password"
          // fieldButtonLabel={'Forgot?'}
          // fieldButtonFunction={() => {}}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <CustomButton
          label={'Sign in'}
          onPress={() => {
            login(email, password);
          }}
          name={'log-in-outline'}
        />
        <Text
          style={{
            textAlign: 'center',
            color: Colors.font,
            fontFamily: 'BreezeSans-Bold',
            padding: hp(1)
          }}>
          OR
        </Text>
        <CustomButton
          label={'Scan ID Barcode'}
          onPress={() => {
            login(email, password);
          }}
          name={'scan-outline'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: hp('100%'),
    width: wp('76.5%'),
    fontFamily: 'BreezeSans-Medium_20150728',
    fontSize: wp('4%'),
    paddingLeft: wp('6%'),
  },
});
