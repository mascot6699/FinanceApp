import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class HomeCardSwipe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> HomeCardSwipe </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeCardSwipe;
