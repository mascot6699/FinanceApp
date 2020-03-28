import React, {Component} from 'react';
import {StyleSheet, View, Image } from 'react-native';
import ActionButton from 'react-native-action-button';

export default class Ex extends Component {

  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          marginTop: -150,
          flex: 0.001,
        }}>
        <ActionButton
          //   btnOutRange={'#3498db'}
          degrees={90}
          spacing={25}
          type="tab"
          offsetX={35}
          offsetY={55}
          size={40}
          buttonColor="#FD7028"
          renderIcon={active => active ? (<Image source={require('../assets/img/Close.png')} /> ) : (<Image source={require('../assets/img/share.png')} />)}
          >
          <ActionButton.Item
            textContainerStyle={{
              width: '55%',
              height: 45,
              borderRadius: 25,
              marginHorizontal: -55,
              zIndex: -9999,
              top: -14,
            }}
            textStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 12,
              marginHorizontal: 15,
              fontWeight: '500',
              opacity: 0.8,
              color: 'black',
            }}
            title="Make a Payment"
            size={25}
            onPress={() => alert('Added to watch later')}>
            <Image />
            <Image
              source={require('../assets/img/Icon3.png')}
              style={styles.actionButtonIcon3}
            />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={{
              width: '55%',
              height: 45,
              borderRadius: 25,
              marginHorizontal: -55,
              top: -9,
              zIndex: -9999,
            }}
            textStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 12,
              marginHorizontal: 15,
              fontWeight: '500',
              opacity: 0.8,
              color: 'black',
            }}
            title="Take a Loan"
            size={25}
            onPress={() => alert('Added to watch later')}>
            <Image
              source={require('../assets/img/Icon2.png')}
              style={styles.actionButtonIcon2}
            />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={{
              width: '55%',
              height: 45,
              borderRadius: 25,
              marginHorizontal: -55,
              zIndex: -9999,
              top: -4,
            }}
            textStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 12,
              marginHorizontal: 15,
              fontWeight: '500',
              opacity: 0.8,
              color: 'black',
            }}
            title="Add New Account"
            size={25}
       >
            <Image
              source={require('../assets/img/Icon1.png')}
              style={styles.actionButtonIcon1}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon3: {
    marginTop: -7,
  },
  actionButtonIcon2: {
    marginTop: 3,
  },
  actionButtonIcon1: {
    top: 5,
  },
});
