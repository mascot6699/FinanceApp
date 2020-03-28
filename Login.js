import React from 'react';
// import axios from 'axios';
import {View,StyleSheet,ImageBackground,Dimensions,Image,Text,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import {imagePaths} from './dictionary/path';
import Logo from './components/Logo';
import CustomTextInput from './components/CustomTextInput';
import {CustomButton} from './components/CustomButton';
import {KeyboardAvoidingView} from 'react-native';
import {LoginBottomButon} from './components/LoginBottomButon';
import AsyncStorage from '@react-native-community/async-storage';

// import AuthContext from './context';
// export const MyContext = React.createContext();
// export const MyContext = React.createContext();

export class Login extends React.Component {
  state = {
    username: 'okan',
    password: 'sadfsfa',
    token: '',
  };

  constructor(props) {
    super(props);
    this.getData();
    this.state = {hidePassword: true};
  }

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  onLogoff = async () => {
    try {
      this.setState({token: "" });
      // await AsyncStorage.removeItem('token')
      await AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  onSubmit = async () => {
    try {
      await this.setState({token: 'abc123'});
      // await AsyncStorage.setItem('username', this.state.username);
      // await AsyncStorage.setItem('token', 'abc123');
      // await AsyncStorage.multiSet([
      //   ['username', this.state.username],
      //   ['token', 'abc123'],
      // ]);
      await AsyncStorage.setItem('userprofile', JSON.stringify({ username: this.state.username, token: this.state.token }))
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('token');
      // const username = await AsyncStorage.getItem('username');

      const userprofile = await AsyncStorage.getItem('userprofile')
      const userProfile = JSON.parse(userprofile)

      if (userProfile !== null) {
        this.setState({ ...userProfile});
      }
      if (username !== null) {
        this.setState({ username });
      }
    } catch (e) {
      // error reading value
    }
  };


  // login = async () => {
  //   const email = await AsyncStorage.getItem('email');
  //   const password = await AsyncStorage.getItem('password');
  //   if (email && password) {
  //     this.setState({email, password});
  //     this.authenticate(email, password);
  //   }
  // };
  // componentDidMount() {
  //   this.login();
  // }

 

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: 'ekin573@hotmail.com',
  //     password: '1parola2',
  //     errors: {},
  //     loading: false,
  //     el: 'email',

  //     bottomvisible: true,
  //     promptVisible: false,
  //   };
  // };
  // componentWillMount = async () => {
  //   this.setState({texts: language.english});
  //   const userinfo = await getUserInfo();
  //   if (userinfo) {
  //     const email = userinfo.Email;
  //     this.setState({email: email});
  //   }
  // };
  // authenticate = (email, password) => {

  //   this.setState({loading: true, message: ''});
  //   axios
  //     .get(
  //       `https://reactnativemaster.com/api/authenticate?email=${email}&password=${password}`,
  //     )
  //     .then(async res => {
  //       this.setState({loading: false});
  //       if (res.data.user_info.status === 'Active') {
  //         await AsyncStorage.setItem('email', email);
  //         await AsyncStorage.setItem('password', password);
  //         this.props.navigation.navigate('Home');
  //       } else {
  //         this.setState({
  //           message: 'This account is not active',
  //           loading: false,
  //         });
  //       }
  //     })
  //     .catch(err => {
  //       this.setState({
  //         message: 'Error connecting to the server, Please try again later.',
  //         loading: false,
  //       });
  //     });
  // };

  render() {
    // const { signIn } = React.useContext(MyContext);
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.scrool} behavior="padding" enabled>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <ImageBackground source={imagePaths.background} style={{width: '100%',height: Dimensions.get('window').height / 1.55,backgroundSize: 'cover',}} />
          <Logo source={imagePaths.Logo}></Logo>
        </View>

        <View style={styles.loginSection}>
          <CustomTextInput
            value={this.state.username}
            onChangeText={val => this.setState({username:val})}
            autoCapitalize={'none'}
            placeholder={'Email'}
            // editable={true}
            // underlineColorAndroid="transparent"
            placeholderTextColor="black"
            style={styles.input}
            // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
          ></CustomTextInput>
          <Image style={{marginHorizontal: 20, top: -33, position: 'relative'}} source={require('./assets/img/mail-line.png')}></Image>

          <View style={styles.textBoxContainer}>
            <TextInput
              value={this.state.password}
              onChangeText={val => this.setState({ password: val })}
              keyboardAppearance="dark"
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.hidePassword}
              style={styles.input}
              placeholder={'Password'}
              inputType={'password'}
              placeholderTextColor="black"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touachableButton}
              onPress={this.setPasswordVisibility}>
              <Image
                source={
                  this.state.hidePassword
                    ? require('./assets/img/eye-off.png')
                    : require('./assets/img/eyeopen.png')
                }
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
          <Image
            
            style={{marginHorizontal: 22, top: -40, position: 'relative'}}
            source={require('./assets/img/lock-line.png')}></Image>


            <CustomButton title={'Login'} onPress={() => navigate('Home')} />
        

          <View style={{flex: 0.6, flexDirection: 'row'}}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 0.5,
              }}>
              <LoginBottomButon
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
                title={'Forget Password'}
              />
              
            </View>
            <Text
              style={{
                width: 2,
                height: 20,
                backgroundColor: '#979797',
                marginTop: 17,
                opacity: 0.3,
              }}></Text>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 0.5,
              }}>
              <LoginBottomButon
                title={'Create an account'}
                onPress={() => navigate('Signup')}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  loginBtn: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#071056',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textBoxContainer: {
    alignItems: 'flex-end',
  },
  touachableButton: {
    marginTop: -35,
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
    marginTop: -5,
  },
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
    height: 350,
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
