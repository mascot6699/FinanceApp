import React, {Component} from 'react';
import {
  Text,
  View,
  NativeModules,
  Platform,
  StyleSheet,
  SafeAreaView,
  Switch,
  ActivityIndicator,
  TextInput,
  Keyboard,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomButton} from '../../components/CustomButton';
import {Formik} from 'formik';
import * as yup from 'yup';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export class ForgetPasswordTwo extends Component {
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
        fontSize: 16,
        width: '100%',
        height: 55,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#0073F7',
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

    const validationSchema = yup.object().shape({
      password: yup
        .string()
        .min(8)
        .required(),
        confirmPassword: yup
        .string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match ya fool', function(value) {
          return this.parent.password === value;
        }),
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
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar barStyle="light-content"/>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}>
            <Icon
              onPress={() => this.props.navigation.navigate('More')}
              name="angle-left"
              size={18}
              color={'white'}
            />
          </View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#D8D8D8', fontWeight: '600', fontSize: 16}}>
              Forget Password
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <View style={styles.content}>
          <View style={{marginHorizontal: 20}}>
            <Text>Create new Password</Text>
          </View>
          <SafeAreaView style={{flex: 0.8,marginHorizontal:20}}>
            <Formik
              initialValues={{
                password: '',
                confirmPassword: '',
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
                    formikKey="password"
                    autoFocus
                    keyboardType="phone-pad"
                    placeholder="Password"
                    secureTextEntry
                  />
                  <Text style={styles.legend}>Password</Text>

                  <StyledInput
                    formikProps={formikProps}
                    formikKey="confirmPassword"
                    keyboardType="phone-pad"
                    placeholder="Confirm password"
                    secureTextEntry
                  />
                  <Text style={styles.legends}>Password Again</Text>

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <React.Fragment>
                    <View style={{flex:0.2,top:80,alignItems:'center',justifyContent:'center'}}>
                      <CustomButton
                        style={{backgroundColor: '#0073F7'}}
                        // onPress={() => this.props.navigation.navigate('Login')}
                        onPress={formikProps.handleSubmit}
                        title={'Save Password'}
                      />
                      <Text style={{color: 'red'}}>
                        {formikProps.errors.general}
                      </Text>
                      </View>
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </Formik>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 35,
  },
  headerCenter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  generalTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: STATUSBAR_HEIGHT + 20,
    backgroundColor: '#091361',
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -5,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    paddingVertical: 20,
  },
  legend: {
    position: 'absolute',
    top: 7,
    left: 17,
    fontWeight: '400',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    color:'#0073F7'
  },
  legends: {
    position: 'absolute',
    top: 88,
    left: 17,
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    fontSize: 12,
    color:'#0073F7'
  },

});

export default ForgetPasswordTwo;
