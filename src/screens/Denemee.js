import React, {Component} from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
  Switch,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

export class Denemee extends Component {
  render() {
    const FieldWrapper = ({children, label, formikProps, formikKey}) => (
      <View style={{marginHorizontal: 20, marginVertical: -15}}>
        <Text style={{marginBottom: 3}}>{label}</Text>
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
        paddingHorizontal: 55,
        borderWidth: 1,
        borderColor: '#C3D3D4',
        opacity: 1,
        borderRadius: 5,
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
        .matches(phoneRegExp, "Phone number is not valid")
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
    return (
      <SafeAreaView style={{flex: 0.4}}>
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
                placeholder="Firstname Lastname"
                autoFocus
              />
              <Image
                style={{marginHorizontal: 40, top: -35, position: 'relative'}}
                source={require('../assets/img/user.png')}></Image>
              <StyledInput
                formikProps={formikProps}
                formikKey="email"
                placeholder="Email"
              />
              <Image
                style={{marginHorizontal: 40, top: -33, position: 'relative'}}
                source={require('../assets/img/mail-line.png')}></Image>
                <StyledInput
                formikProps={formikProps}
                formikKey="phone"
                placeholder="Phone Number"
              />
              <Image
                style={{marginHorizontal: 40, top: -33, position: 'relative'}}
                source={require('../assets/img/mail-line.png')}></Image>
              <StyledInput
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password"
                secureTextEntry
              />
              <Image
                style={{marginHorizontal: 40, top: -35, position: 'relative'}}
                source={require('../assets/img/lock-line.png')}></Image>

              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <React.Fragment>
                  <Button title="Submit" onPress={formikProps.handleSubmit} />
                  <Text style={{color: 'red'}}>
                    {formikProps.errors.general}
                  </Text>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
}

export default Denemee;
