import React, {Component,useState} from 'react';
import {
  Text,
  View,
  Platform,
  NativeModules,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PhoneButton} from '../components/PhoneButton';
import Confirm from '../components/Confirm';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export class Confirmation extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  handleChange = values => {
    this.setState(state => {
      if (state.value.length >= CODE_LENGTH.length) return null;
      return {
        value: (state.value + values).slice(0, CODE_LENGTH.length),
      };
    });
  };

  handlePress = () => {
    this.input.current.focus();
  };
  handleFocus = () => {
    this.setState({ focused: true });
  };
  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };

  validate(text, type) {
    let num = /^[0-9]+$/;
    if (type == 'phone') {
      if (num.test(text)) {
        this.setState({
          passwordValdate: true,
        });
      } else {
        this.setState({
          passwordValdate: false,
        });
      }
    }
  }
//   validate = (text) => {
//     console.log(text);
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (reg.test(text) === false) {
//       console.log("Email is Not Correct");
//       this.setState({ email: text })
//       return false;
//     }
//     else {
//       this.setState({ email: text })
//       console.log("Email is Correct");
//     }
//   }
  

  render() {
    const navigation = this.props.navigate;
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}>
            <Icon
              style={{}}
              onPress={() => this.props.navigation.navigate('ForgetPassword')}
              name="angle-left"
              size={20}
              color={'white'}
            />
          </View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>
              Forget Password
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View style={styles.headerContent}>
              <Text style={styles.text}>Confirmation Code</Text>
            </View>
            <View style={styles.headerContents}>
              <Text style={styles.texttwo}>
              We sent a code to <Text style={{color:'#0073F7',fontSize:12}}>+41 (76) 558 77 66.</Text> Please write down.
              </Text>
            </View>
            <View style={styles.phoneInputGeneral} pointerEvents={this.state.isLoading ? 'none' : 'auto'}>
              <Confirm />
            </View>
            <View style={{marginHorizontal:10,justifyContent:'center',alignItems:'center',flex:1}}>
            <View style={{flex:0.2,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <TouchableOpacity>
            <View style={{marginHorizontal:10,justifyContent:'center',alignItems:'center',marginLeft:5}}>
            <Image style={{marginLeft:-5}} source={require('../assets/img/Refresh.png')} />
            </View>
            </TouchableOpacity>
            <Text style={{color:'black',fontWeight:'600',opacity:0.3,}}>Resend</Text>
            </View>
            <PhoneButton title={'Confirm Code'} onPress={() => this.props.navigation.navigate('Confirmation')} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginTop: -5,
  },
  headerInner: {
    flex: 0.7,
    marginHorizontal: 20,
  },
  headerContent: {
    marginHorizontal: 10,
    marginVertical: 20,
    width: '90%',
  },
  headerContents: {
    marginHorizontal: 10,
    width: '80%',
  },
  phoneInputGeneral: {
    flex:0.5,
    marginVertical: 30,
    width: '100%',
  },
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 25,
    marginTop: -5,
  },
  headerCenter: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
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
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  texttwo: {
    color: '#7E7E7E',
    fontWeight: '500',
    fontSize:14
  },
});

export default Confirmation;
