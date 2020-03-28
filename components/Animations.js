import React, {Component} from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Animations extends Component {
  state = {
    animation: Animated.Value(0),
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <View style={[styles.button, styles.pay]}></View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: 0.1,
    textShadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  pay: {
      backgroundColor: '#FD7028',
  }
});


AppRegistry.registerComponent('Animations', () => 'Animations');

