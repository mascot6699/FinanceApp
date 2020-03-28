import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../dictionary/colors';

export const CustomTabButton = ({
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
          {color: colors.white, fontSize: 20, fontWeight: '500'},
          btnTextStyle,
        ]}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default CustomTabButton;
