import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../dictionary/colors';

export const FullHeightButton = ({
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
    width: '8%',
    height: 4,
    borderRadius: 1,
    backgroundColor: '#CFCFCF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
});

export default FullHeightButton;
