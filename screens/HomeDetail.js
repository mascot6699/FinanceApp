import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class HomeDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeDetails</Text>
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

export default HomeDetail;
