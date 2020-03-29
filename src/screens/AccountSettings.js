import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
  Switch,
  TextInput,
  SafeAreaView,
  NativeModules,
  Platform,
  ScrollView
} from 'react-native';
// import CustomTextInput from '../components/CustomTextInput';
import {CustomButton} from '../../components/CustomButton';
import {KeyboardAvoidingView} from 'react-native';
import {ImageChangeButton} from '../../components/ImageChangeButton';
// import ImagePicker from 'react-native-image-picker';
// import AsyncStorage from '@react-native-community/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';


const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  allosEditing: true,
};


export class AccountSettings extends Component {
  // componentDidMount = () => {
  //   AsyncStorage.getItem('username').then(value =>
  //     this.setState({username: value}),
  //   );
  //   AsyncStorage.getItem('password').then(value =>
  //     this.setState({password: value}),
  //   );
  //   AsyncStorage.getItem('phone').then(value => this.setState({phone: value}));
  //   AsyncStorage.getItem('email').then(value => this.setState({email: value}));
  // };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      avatarSource: null,
      inputUsername: '',
      inputPassword: '',
      inputPhone: '',
      inputMail: '',
      myButtonOpacity: 1,
      isFocused: true,
      username: '',
      password: '',
      phone: '',
      email: '',
      nameValdate: true,
      passwordValdate: true,
    };
  }
  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  myValidate = () => {
    const {inputUsername, inputPassword, inputPhone, inputMail} = this.state;
    const myUsername = this.state.username;
    const myPassword = this.state.password;
    const myPhone = this.state.phone;
    const myMail = this.state.email;

    if (
      inputUsername == '' &&
      inputPassword == '' &&
      inputMail == '' &&
      inputPhone == ''
    ) {
      Alert.alert('Please fill the Full Name,Email,Phone Number and Password!');
    } else if (
      inputUsername != myUsername &&
      inputPassword != myPassword &&
      inputPhone != myPhone &&
      inputMail != myMail
    ) {
      Alert.alert('Account not found');
    } else if (inputUsername == myUsername && inputPassword == '') {
      Alert.alert('Password Empty');
    } else if (inputUsername == '' && inputPassword == myPassword) {
      Alert.alert('Username Empty');
    } else if (inputPhone == myPhone && inputMail == '') {
      Alert.alert('Phone Number Empty');
    } else if (inputMail == '' && inputPhone == myMail) {
      Alert.alert('Email Empty');
    } else if (inputUsername == myUsername && inputPassword == myPassword) {
      this.props.navigation.navigate('Login');
    } else {
      Alert.alert('Data not found');
    }
  };

  // onSelectPicture = () => {
  //   ImagePicker.showImagePicker(options, response => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = {uri: response.uri};

  //       // You can also display the image using data:
  //       // const source = { uri: 'data:image/jpeg;base64,' + response.data };

  //       this.setState({
  //         avatarSource: source,
  //       });
  //     }
  //   });
  // };
  validate(text, type) {
    let alph = /^[a-zA-Z]+$/;
    let number = /^[1-991-100]+$/;
    if (type == 'username') {
      if (alph.test(text)) {
        this.setState({
          nameValdate: true,
        });
      } else {
        this.setState({
          nameValdate: false,
        });
      }
    } else if (type == 'password') {
      if (number.test(text)) {
        this.setState({
          passwordValdate: true,
        });
      } else {
        this.setState({
          passwordValdate: false,
        });
      }
    }
  }

  render() {
    const FieldWrapper = ({children, label, formikProps, formikKey}) => (
      <View style={{}}>
        <Text style={{marginBottom: -3}}>{label}</Text>
        {children}
        <Text style={{color: 'red'}}>
          {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
      </View>
    );

    const StyledInput = ({label, formikProps, formikKey, ...rest}) => {
      const inputStyles = {
        color: 'black',
        fontSize: 16,
        width: '100%',
        height: 55,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#C3D3D4',
        opacity: 1,
        borderRadius: 5,
        paddingVertical: 10,
      };

      if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
      }

      return (
        <FieldWrapper
          label={label}
          formikKey={formikKey}
          formikProps={formikProps}>
          <TextInput
            style={inputStyles}
            onChangeText={formikProps.handleChange(formikKey)}
            onBlur={formikProps.handleBlur(formikKey)}
            {...rest}
          />
        </FieldWrapper>
      );
    };

    const StyledSwitch = ({formikKey, formikProps, label, ...rest}) => (
      <FieldWrapper
        label={label}
        formikKey={formikKey}
        formikProps={formikProps}>
        <Switch
          value={formikProps.values[formikKey]}
          onValueChange={value => {
            formikProps.setFieldValue(formikKey, value);
          }}
          {...rest}
        />
      </FieldWrapper>
    );
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = yup.object().shape({
      username: yup
        .string()
        .max(16)
        .min(8)
        .required(),
      email: yup
        .string()
        .email()
        .required(),
      phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required(),
      password: yup
        .string()
        .min(8)
        .required(),
    });

    const signUp = ({email}) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'a@a.com') {
            reject(new Error("You playin' with that fake email address."));
          }
          resolve(true);
        }, 1000);
      });
    const {avatarSource, loading} = this.state;
    const navigation = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.generalTop}>
      <View style={styles.headerLeft}>
      <Icon
      style={{}}
      onPress={() => this.props.navigation.navigate('Settings')}
      name="angle-left"
      size={18}
      color={'white'}
    />
      </View>
      <View style={styles.headerCenter}>
        <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 16}}>
          Account Settings
        </Text>
      </View>
      <View style={{flex:0.5}}></View>
    </View>
        <View style={styles.Portfolio}>
          <View style={styles.ChooseSelectImage}>
            <Image source={require('../assets/img/Picture.png')} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
              }}>
              {avatarSource && (
                <Image
                  source={this.state.avatarSource}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 100,
                    marginBottom: 20,
                  }}
                />
              )}
              {loading && <ActivityIndicator size={'small'} />}
            </View>
            <View style={{marginTop:-15,zIndex:9999}}>
            <ImageChangeButton
              onPress={this.onSelectPicture}
              title={'Change'}
            />
            </View>
            <Image
              style={{marginTop: -20, marginRight: 50,zIndex:9999}}
              source={require('../assets/img/cam.png')}
            />
          </View>
        </View>
        <View style={styles.PortfolioContent}>
        <ScrollView>
          <View style={styles.loginSection}>
            <SafeAreaView style={{flex: 0.8}}>
              <Formik
                initialValues={{
                  username: '',
                  email: '',
                  phone: '',
                  password: '',
                }}
                onSubmit={(values, actions) => {
                  signUp({email: values.email})
                    .then(() => {
                      alert(JSON.stringify(values));
                    })
                    .catch(error => {
                      actions.setFieldError('general', error.message);
                    })
                    .finally(() => {
                      actions.setSubmitting(false);
                    });
                }}
                validationSchema={validationSchema}>
                {formikProps => (
                  <React.Fragment>
                    <StyledInput
                      formikProps={formikProps}
                      formikKey="username"
                      autoCapitalize="none"
                      placeholder="Firstname Lastname"
                      ></StyledInput>

                    <Text style={styles.legend}>Full Name</Text>

                    <StyledInput
                      formikProps={formikProps}
                      formikKey="email"
                      autoCapitalize="none"
                      placeholder="Email"
                    />

                    <Text style={styles.legends}>Email</Text>

                    <StyledInput
                      formikProps={formikProps}
                      autoCapitalize="none"
                      formikKey="phone"
                      placeholder="Phone Number"
                    />

                    <Text style={styles.legendss}>Phone Number</Text>

                    <StyledInput
                      formikProps={formikProps}
                      autoCapitalize="none"
                      formikKey="password"
                      placeholder="Password"
                      secureTextEntry
                    />

                    <Text style={styles.legendsss}>Password</Text>

                    {formikProps.isSubmitting ? (
                      <ActivityIndicator />
                    ) : (
                      <React.Fragment>
                        <CustomButton
                          style={{backgroundColor: '#0073F7'}}
                          // onPress={() => this.props.navigation.navigate('Login')}
                          onPress={formikProps.handleSubmit}
                          title={'Save'}
                        />
                        <Text style={{color: 'red'}}>
                          {formikProps.errors.general}
                        </Text>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
               </Formik>
              </SafeAreaView>
            </View>
          </ScrollView>
         </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  Portfolio: {
    flex: 0.5,
    borderTopRightRadius:7,
    borderTopLeftRadius:7,
    backgroundColor:'#f2f2f2',
    marginTop:-5
  },
  PortfolioContent: {
    flex: 1,
  },
  loginSection: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    padding: 20,
    marginTop:-30,
  },
  legend: {
    position: 'absolute',
    top: 7,
    left: 17,
    fontWeight: '400',
    backgroundColor: '#f2f2f2',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
  },
  legends: {
    position: 'absolute',
    top: 88,
    left: 17,
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f2f2f2',
    fontSize: 12,
  },
  legendss: {
    position: 'absolute',
    top: 168,
    left: 17,
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f2f2f2',
    fontSize: 12,
  },
  legendsss: {
    position: 'absolute',
    top: 248,
    left: 17,
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f2f2f2',
    fontSize: 12,
  },
  ChooseSelectImage: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 0.6,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 39,
  },
  headerCenter: {
    flex:0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    top:7
  },
  generalTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: STATUSBAR_HEIGHT +15,
    backgroundColor: '#060D4A',
    paddingBottom: 25,
  },
  // error: {
  //   borderWidth: 2,
  //   borderColor: '#0073F7',
  // },
});

export default AccountSettings;
