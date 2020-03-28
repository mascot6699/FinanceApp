import React, {Component} from 'react';
import {
  Text,
  View,
  Platform,
  NativeModules,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomButton} from '../components/CustomButton';
import ModalDropdown from 'react-native-modal-dropdown';


const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      passwordValdate: true,

      isLoading: false,
      usernameInput: "",
      // portInput: "(...)",
      passwordInput: "",
      urlInput: "",
    };
  }

  validate(text, type) {
    var num = /^[0-9]+$/;
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
  
  

  render() {
    const navigation = this.props.navigate;
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}>
            <Icon
              style={{}}
              onPress={() => this.props.navigation.navigate('Login')}
              name="angle-left"
              size={18}
              color={'white'}
            />
          </View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 16}}>
              Forget Password
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View style={styles.headerContent}>
              <Text style={styles.text}>Phone Number</Text>
            </View>
            <View style={styles.headerContents}>
              <Text style={styles.texttwo}>
                Please enter your phone number.We will send you a reset code
              </Text>
            </View>
            <View style={styles.phoneInputGeneral} pointerEvents={this.state.isLoading ? 'none' : 'auto'}>
        <View style={{alignItems:'flex-start',justifyContent:'center',borderWidth:1,borderColor:'#E2E2E2',width:71,height:55,top:45,}}>
            <ModalDropdown textStyle={{fontSize:14,paddingHorizontal:10}} dropdownTextStyle={{margin:5}} defaultValue={('+41')} animated={true}  options={['+41', '+45', '+43', '+38', '+44']}/>
            </View>
            <Icon
            style={{top:6,marginHorizontal:40}}
            name="angle-down"
            size={20}
            color={'black'}
            />
          <View style={{alignItems:'flex-end',marginHorizontal:30,flex:0.2,backgroundColor:'red'}}>
              <TextInput
                style={[
                  styles.input,
                  !this.state.phoneValdate ? styles.input : null,
                ]}
                autoCapitalize="none" 
                autoCorrect={false}  
                ref={(input)=> this.portInput = input} 
                keyboardType='phone-pad' 
                returnKeyType="go" 
                value={this.state.text}
                onChangeText={text => this.setState({portInput: text})}
                placeholder={'Phone Number'}
              />
              </View>
            
            </View>
            <View style={{marginHorizontal:10,justifyContent:'center',alignItems:'center',flex:1}}>
            <CustomButton title={'Send Code'} onPress={() => this.props.navigation.navigate('Confirmation')} />
            <ActivityIndicator size="large" color={'black'} animating={this.state.isLoading} style={styles.activityIndicator} />
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
    flex: 0.8,
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
    marginVertical: 30,
    marginHorizontal: 10,
    width: '100%',
  },
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    marginTop: -5,
  },
  headerCenter: {
    flex: 1,
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
  },
  input: {
    color: 'black',
    fontSize: 16,
    width: '88%',
    height: 55,
    paddingHorizontal: 25,
    borderWidth: 1.5,
    borderColor: '#0073F7',
    opacity: 1,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    marginTop:-30,
    marginHorizontal:-5
  },
  // error: {
  //   color: 'black',
  //   fontSize: 16,
  //   width: '95%',
  //   height: 55,
  //   paddingHorizontal: 45,
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   opacity: 1,
  //   borderRadius: 5,
  // },
});

export default ForgetPassword;
