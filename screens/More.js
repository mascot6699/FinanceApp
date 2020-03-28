import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';
import colors from '../dictionary/colors';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export class More extends Component {
  render() {
  const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}>
         
          </View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 18}}>
              More
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <View style={styles.moreCenter}>
          <View style={styles.moreOut}>
            <View style={styles.moreInner}>
              <Image source={require('../assets/img/profile.png')} />
              <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
              >
                <Text
                  style={{
                    marginLeft: 15,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  Profile
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.moreInner}>
              <Image source={require('../assets/img/star.png')} />
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}
              >
                <Text
                  style={{
                    marginLeft: 18,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  Favorites
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.moreInner}>
              <Image source={require('../assets/img/market.png')} />
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Market')}
              >
                <Text
                  style={{
                    marginLeft: 22,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  Market
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.moreInner}>
              <Image source={require('../assets/img/news.png')} />
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Settings')}
              >
                <Text
                  style={{
                    marginLeft: 22,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  News
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.moreInner}>
              <Image source={require('../assets/img/upgrade.png')} />
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AccountDetails')}
              >
                <Text
                  style={{
                    marginLeft: 20,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  Upgrade
                </Text>
              </TouchableOpacity>
            </View>
          </View>
           
        </View>
        <View style={{flex:0.2,paddingVertical:20,justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/img/yatay.png')} />
        </View>
        <View style={styles.katman}>
        
          <View style={styles.moreInner}>
          
          <View>
            <Image source={require('../assets/img/settings.png')} />
            </View>
            <View>
            <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Settings')}
            >
              <Text
                style={{
                  marginLeft: 20,
                  color: colors.white,
                  fontWeight: 'bold',
                }}>
                Settings
              </Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.moreInner}>
            <Image
              style={{marginLeft: -5}}
              source={require('../assets/img/privacy.png')}
            />
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgetPasswordTwo')}
            >
              <Text
                style={{
                  marginLeft: 20,
                  color: colors.white,
                  fontWeight: 'bold',
                }}>
                Privacy
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060D4A',
  },
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 35,
  },
  headerCenter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    left:8
  },
  generalTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: STATUSBAR_HEIGHT + 30,
    backgroundColor: '#060D4A',
    paddingBottom: 40,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
 
  moreCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 5,
    flexDirection: 'column',
  },
  moreOut: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  moreInner: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default More;
