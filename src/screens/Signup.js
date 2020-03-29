import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {imagePaths} from '../../dictionary/path';
import Logo from '../../components/Logo';
import CustomTextInput from '../../components/CustomTextInput';
import {CustomButton} from '../../components/CustomButton';
import {KeyboardAvoidingView} from 'react-native';
import {SignupBottomButton} from '../../components/SignupBottomButon';
// import AuthContext from './context';
import { AuthContext } from '../../dictionary/context';




export class Signup extends Component {
  render() {
    const {SignUp} = React.createContext(AuthContext);
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.scrool} behavior="padding" enabled>
        <View style={styles.header}>
          <ImageBackground
            source={imagePaths.background}
            style={{
              width: '100%',
              height: Dimensions.get('window').height / 1.8,
              backgroundSize: 'cover',
            }}></ImageBackground>
          <Logo source={imagePaths.Logo}></Logo>
        </View>

        <View style={styles.loginSection}>
          <CustomTextInput
            autoCapitalize={'none'}
            placeholder={'Firstname Lastname'}
            editable={true}
            placeholderTextColor="black"
            // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
            style={styles.input}
            onSubmit={() => this.namesurname.focus()}></CustomTextInput>
          <Image
            style={{marginHorizontal: 20, top: -35, position: 'relative'}}
            source={require('../assets/img/user.png')}></Image>
          <CustomTextInput
            autoCapitalize={'none'}
            placeholder={'Email'}
            editable={true}
            placeholderTextColor="black"
            // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
            style={styles.input}
            onSubmit={() => this.email.focus()}></CustomTextInput>
          <Image
            style={{marginHorizontal: 20, top: -33, position: 'relative'}}
            source={require('../assets/img/mail-line.png')}></Image>
          <CustomTextInput
            style={styles.input}
            autoCapitalize={'none'}
            placeholder={'Password'}
            editable={true}
            // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
            placeholderTextColor="black"
            onSubmit={() => this.password.focus()}
            inputType={'password'}></CustomTextInput>
          <Image
            style={{marginHorizontal: 20, top: -35, position: 'relative'}}
            source={require('../assets/img/lock-line.png')}></Image>
          <CustomButton title={'Sign Up'} onPress={() => navigate('Login')}  />

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              flex: 0.5,
              marginVertical: 15,
            }}>
            <SignupBottomButton 
            onPress={() => navigate('Login')}
            title={'I have an account already'} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  scrool: {
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginSection: {
    flexDirection: 'column',
    width: '100%',
    height: 410,
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  input: {
    color: 'black',
    fontSize: 16,
    width: '100%',
    height: 55,
    paddingHorizontal: 55,
    borderWidth: 1,
    borderColor: '#C3D3D4',
    opacity: 1,
    borderRadius: 5,
  },
});

export default Signup;