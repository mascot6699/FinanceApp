import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import {imagePaths} from '../../dictionary/path';
import Logo from '../../components/Logo';

export class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={imagePaths.background}
          style={{
            width: '100%',
            height: Dimensions.get('window').height / 1,
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Image source={require('../assets/img/Buyukoval.png')} />
          </View>
          <View style={styles.header}>
            <Image
              style={{top: -100}}
              source={require('../assets/img/ortaOval.png')}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Logo style={{top: -50}} source={imagePaths.Logo}></Logo>
            </View>
          </View>
          <View style={{alignItems:'center',top:60,left:70}}>
            <Image source={require('../assets/img/kucukOval.png')} />
          </View>
          <View style={styles.bottom}>
            <Image source={require('../assets/img/altortaOval.png')} />
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
                wwww.radity.com
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
});

export default Splash;
