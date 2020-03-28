import React, {Component} from 'react';
import {Image} from 'react-native';

const Logo = ({source, style}) => (
  <Image
    source={source}
    style={[{width: 125, height: 53, position: 'absolute'}, style]}
  />
);
export default Logo;
