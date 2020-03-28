import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Text,
  ActivityIndicator,
  TextInput,TouchableOpacity,
  Switch,
} from 'react-native';
import {imagePaths} from './dictionary/path';
import Logo from './components/Logo';
import {CustomButton} from './components/CustomButton';
import {KeyboardAvoidingView} from 'react-native';
import {SignupBottomButton} from './components/SignupBottomButon';
import {Formik} from 'formik';
import * as yup from 'yup';
// import AuthContext from './context';

export class Signup2 extends React.Component {
  constructor() {
    super();
    this.state = {hidePassword: true};
  }

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  // const {signUp} = React.useContext(AuthContext);
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
        paddingHorizontal: 50,
        borderWidth: 1,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 5,
        paddingVertical: 10,
      };

      if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
      }

      return (
        <FieldWrapper label={label} formikKey={formikKey} secureTextEntry isValid formikProps={formikProps}>
          <TextInput style={inputStyles} onChangeText={formikProps.handleChange(formikKey)} onBlur={formikProps.handleBlur(formikKey)} {...rest}/>
        </FieldWrapper>
      );
    };

    const StyledSwitch = ({formikKey, formikProps, label, ...rest}) => (
      <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
        <Switch value={formikProps.values[formikKey]} onValueChange={value => { formikProps.setFieldValue(formikKey, value);}}
          {...rest}
        />
      </FieldWrapper>
    );
    const validationSchema = yup.object().shape({
      username: yup
        .string()
        .max(16)
        .min(8)
        .required('This field is required !'),
      email: yup
        .string()
        .email()
        .required('This field is required !'),
      password: yup
        .string('')
        .min(8)
        .required('This field must be at least 6 characters !'),
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
          <Formik initialValues={{
              username: '',
              email: '',
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
              <View style={{marginBottom:-15}}>
                <StyledInput formikProps={formikProps} formikKey="username" autoCapitalize="none" />
                  <Image style={{marginHorizontal: 25,top: -50,position: 'relative'}} source={require('./assets/img/userout.png')}></Image>
                  <Text style={styles.legend}>Firstname Lastname</Text>
                  <View style={{alignItems: 'flex-end',marginBottom:-10}}>
                    <Image style={{marginHorizontal: 20,top: -65,position: 'relative',}} source={require('./assets/img/unlem.png')}></Image>
                  </View>
              </View>

              <View style={{marginBottom:-10}}>
                <StyledInput formikProps={formikProps} formikKey="email" autoCapitalize="none"/>
                <Image
                  style={{marginHorizontal: 25, top: -48, position: 'relative'}}
                  source={require('./assets/img/mailout.png')}></Image>
                <Text style={styles.legend}>Email</Text>
              </View>

              <View style={{marginBottom:-10}}>
                <StyledInput formikProps={formikProps} autoCapitalize="none" formikKey="password" />
                <View style={styles.textBoxContainer}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
                  <Image source={this.state.hidePassword? require('./assets/img/eye-off.png'): require('./assets/img/eyeopen.png')} style={styles.buttonImage}/>
                  <Image style={{marginHorizontal: 0,top: -18,position: 'relative'}} source={require('./assets/img/unlem.png')}></Image>
                  </TouchableOpacity>
                </View>
                <Image style={{marginHorizontal: 25, top: -52, position: 'relative'}} source={require('./assets/img/lockout.png')}></Image>
                <Text style={styles.legend}>Password</Text>
              </View>

                {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                  <React.Fragment>
                    <CustomButton
                    style={{marginTop:20}}
                      title={'Sign Up'}
                      onPress={formikProps.handleSubmit}
                    />
                    <Text style={{color: 'red'}}>
                      {formikProps.errors.general === this.state.legend}
                    </Text>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </Formik>
          <View style={{justifyContent: 'center',flexDirection: 'row',alignItems: 'center',flex: 0.5,marginVertical: -20}}>
            <SignupBottomButton
              onPress={() => this.props.navigation.navigate('Login')}
              title={'I have an account already'}
            />
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
    height: 450,
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#f2f2f2',
    marginVertical:20
  },
  legend: {
    position: 'absolute',
    top: 5,
    left: 15,
    fontWeight: '400',
    backgroundColor: '#f2f2f2',
    paddingLeft: 8,
    paddingRight: 10,
    fontSize: 12,
  },
  touachableButton: {
    marginTop: -37,
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '60%',
    width: '60%',
    marginTop:-17,
    marginHorizontal:-30
  },
  textBoxContainer: {
    alignItems: 'flex-end',
  },
});
export default Signup2;
