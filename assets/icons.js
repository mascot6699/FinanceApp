import React from 'react';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons as MCI,
  Entypo,
  MaterialIcons,
  FontAwesome as FA,
  EvilIcons,
  Foundation,
} from 'react-native-vector-icons';

export const User = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="user"
      onPress={onPress}
    />
  );
};

export const UserBlack = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="user-circle-o"
      onPress={onPress}
    />
  );
};

export const PasswordIcon = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="lock"
      onPress={onPress}
    />
  );
};

export const DenizbankIcon = ({size, color, onPress, style, ...rest}) => {
  return (
    <MCI
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ship-wheel"
      onPress={onPress}
    />
  );
};

export const Menu = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ios-menu"
      onPress={onPress}
    />
  );
};

export const Plus = ({size, color, onPress, style, ...rest}) => {
  return (
    <EvilIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="plus"
      onPress={onPress}
    />
  );
};

export const Minus = ({size, color, onPress, style, ...rest}) => {
  return (
    <EvilIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="minus"
      onPress={onPress}
    />
  );
};

export const TrendingUP = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="md-trending-up"
      onPress={onPress}
    />
  );
};
export const Star = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="md-star"
      onPress={onPress}
    />
  );
};
export const Bag = ({size, color, onPress, style, ...rest}) => {
  return (
    <Foundation
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="shopping-bag"
      onPress={onPress}
    />
  );
};
export const Touch = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="touch-app"
      onPress={onPress}
    />
  );
};
export const BackInTime = ({size, color, onPress, style, ...rest}) => {
  return (
    <Entypo
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="back-in-time"
      onPress={onPress}
    />
  );
};
export const Email = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="email"
      onPress={onPress}
    />
  );
};

export const Box = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="check-box-outline-blank"
      onPress={onPress}
    />
  );
};

export const NextPage = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ios-arrow-forward"
      onPress={onPress}
    />
  );
};
export const Warning = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="warning"
      onPress={onPress}
    />
  );
};

export const Back = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ios-arrow-back"
      onPress={onPress}
    />
  );
};

export const Flag = ({size, color, onPress, style, ...rest}) => {
  return (
    <MCI
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="flag"
      onPress={onPress}
    />
  );
};
export const MobilePhone = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="mobile-phone"
      onPress={onPress}
    />
  );
};

export const Assignment = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="assignment-turned-in"
      onPress={onPress}
    />
  );
};
export const Security = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="security"
      onPress={onPress}
    />
  );
};

export const Wifi = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ios-wifi"
      onPress={onPress}
    />
  );
};

export const Timer = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="timer"
      onPress={onPress}
    />
  );
};

export const Play = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="play"
      onPress={onPress}
    />
  );
};

export const Refresh = ({size, color, onPress, style, ...rest}) => {
  return (
    <EvilIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="refresh"
      onPress={onPress}
    />
  );
};

export const Search = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="search"
      onPress={onPress}
    />
  );
};

export const Logout = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="exit-to-app"
      onPress={onPress}
    />
  );
};
export const Up = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="caret-up"
      onPress={onPress}
    />
  );
};

export const Down = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="caret-down"
      onPress={onPress}
    />
  );
};
export const Question = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="question"
      onPress={onPress}
    />
  );
};

export const Eye = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ios-eye"
      onPress={onPress}
    />
  );
};

export const Wallet = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="account-balance-wallet"
      onPress={onPress}
    />
  );
};

export const Money = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="money"
      onPress={onPress}
    />
  );
};

export const Receipt = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="receipt"
      onPress={onPress}
    />
  );
};

export const Info2 = ({size, color, onPress, style, ...rest}) => {
  return (
    <AntDesign
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="infocirlceo"
      onPress={onPress}
    />
  );
};

export const Info = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="ios-information-circle"
      onPress={onPress}
    />
  );
};

export const PlayCircle = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="play-circle-outline"
      onPress={onPress}
    />
  );
};

export const Code = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="code"
      onPress={onPress}
    />
  );
};

export const Refresh2 = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="refresh"
      onPress={onPress}
    />
  );
};
export const Input = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="input"
      onPress={onPress}
    />
  );
};

export const Stop = ({size, color, onPress, style, ...rest}) => {
  return (
    <Entypo
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="controller-stop"
      onPress={onPress}
    />
  );
};

export const Calendar = ({size, color, onPress, style, ...rest}) => {
  return (
    <Ionicons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="md-calendar"
      onPress={onPress}
    />
  );
};

export const Clock = ({size, color, onPress, style, ...rest}) => {
  return (
    <FA
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="clock-o"
      onPress={onPress}
    />
  );
};

export const ArrowDownLeft = ({size, color, onPress, style, ...rest}) => {
  return (
    <MaterialIcons
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="arrow-downward"
      onPress={onPress}
    />
  );
};

export const CircleRight = ({size, color, onPress, style, ...rest}) => {
  return (
    <AntDesign
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="rightcircle"
      onPress={onPress}
    />
  );
};

export const Warning2 = ({size, color, onPress, style, ...rest}) => {
  return (
    <AntDesign
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="warning"
      onPress={onPress}
    />
  );
};

export const Pause = ({size, color, onPress, style, ...rest}) => {
  return (
    <Feather
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="pause-circle"
      onPress={onPress}
    />
  );
};

export const UnCheck = ({size, color, onPress, style, ...rest}) => {
  return (
    <Feather
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="square"
      onPress={onPress}
    />
  );
};

export const Checked = ({size, color, onPress, style, ...rest}) => {
  return (
    <Feather
      {...rest}
      size={size || 32}
      style={[style, {color: color || '#fff'}]}
      name="check-square"
      onPress={onPress}
    />
  );
};
