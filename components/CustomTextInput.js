import React from 'react';
import {TextInput} from 'react-native';

const CustomTextInput = ({
  inputType,
  value,
  errorText,
  style,
  editable,
  onSubmit,
  focus,
  placeholderTextColor,
  onFocus,
  placeholder,
  onChangeText,
  onBlur,
  autoCapitalize,
}) => (
  <TextInput
    //autoCapitalize={autoCapitalize =="none"}
    returnKeyType={'next'}
    placeholderTextColor={placeholderTextColor}
    autoFocus={focus}
    autoCapitalize={'none'}
    onSubmitEditing={this.textHandler}
    secureTextEntry={inputType == 'password'}
    editable={editable === true}
    value={value}
    keyboardAppearance="dark"
    // returnKeyType="go"
    placeholder={placeholder}
    placeholderr={errorText}
    onChangeText={onChangeText}
    keyboardType="email-address"
    underlineColorAndroid={'transparent'}
    onFocus={onFocus}
    onBlur={onBlur}
    style={[
      {
        width: '100%',
        lineHeight: 20,
        color: '#fff',
        fontSize: 15,
        // fontFamily: 'app-font-family'
      },
      style,
    ]}
  />
);

CustomTextInput.defaultProps = {
  focus: false,
  errorText: '',
  inputType: 'text',
  editable: true,
  placeholderTextColor: '#ddd',
  onSubmit: () => true,

  //onFocus:() => null
};

export default CustomTextInput;
