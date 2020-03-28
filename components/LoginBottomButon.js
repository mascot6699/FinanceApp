import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../dictionary/colors';

export const LoginBottomButon = ({
  title,
  style,
  onPress,
  size,
  btnTextStyle,
  children,
  opacity,
  disabled,
  loading,
}) => (
  <TouchableOpacity
    activeOpacity={opacity}
    disabled={disabled || loading}
    style={[styles.button, style]}
    onPress={loading ? () => null : onPress}>
    {children}
    {loading ? (
      <ActivityIndicator size="small" />
    ) : (
      <Text
        style={[
          {color: colors.black, fontSize: 16, fontWeight: '400',textDecorationLine:'underline'},
          btnTextStyle,
        ]}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginBottomButon;
