import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../dictionary/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export const MoreButtonIcon = ({
  title,
  style,
  onPress,
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
    <Icon color={'white'} name="ios-more" size={24}></Icon>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    marginTop: -28,
  },
});

export default MoreButtonIcon;
