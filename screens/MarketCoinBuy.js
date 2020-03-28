import React, {Component} from 'react';
import {Text, View, StyleSheet, NativeModules, Platform,Image, Alert, TouchableOpacity} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import {CustomButton} from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropdownUp from '../components/DrowdownUp';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export class MarketCoinBuy extends Component {
    state = {
        data: '',
        min: '',
        max: '',
        lastprice: '',
        property:[{ btc:'Bitcoin', price: '$10,136.73', btcDesc: 'BTC', yuzde: '4,72%', Val: 'Value', Monts: 'Amount', ValDescr:'$1,704.08', MontsDescr: '0.1643459BTC'
            }   
          ],
        }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}>
            <Icon
              style={{}}
              onPress={() => this.props.navigation.navigate('Coin')}
              name="angle-left"
              size={20}
              color={'white'}
            />
          </View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#D8D8D8', fontWeight: '600', fontSize: 16}}>
              Crypto Market
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>

        <View style={{flex:1.5,borderTopLeftRadius:7,borderTopRightRadius:7,backgroundColor:'#f2f2f2',marginTop:-5}}>
          <View>
          {this.state.property.map(({ btc, price, btcDesc, yuzde }, index) => {
            return (
              <View style={{height:100}} key={index}>
              <View style={styles.Content}>
              <Image source={require('../assets/img/btc.png')}/>
                <Text style={styles.Description}>{btc}</Text>
                <TouchableOpacity style={{}}
                onPress={() => alert('Bitcoin Favorilere Eklendi.')}
                >
    <Image style={{top:7,marginHorizontal:0,}} source={require('../assets/img/favorite.png')}/>
    </TouchableOpacity>
                <View style={styles.ContentRight}>
                <Text style={{color:'black',fontSize:26,fontWeight:'500',marginTop:-5}}>{price}</Text>
                <DropdownUp style={{marginHorizontal:-35,top:40}} />
                    <View style={{marginTop:10,marginHorizontal:50}}>
                        <Text style={{fontSize:12,color:'black'}}>{btcDesc}</Text>
                        <Text style={{left:45,top:-15,fontSize:12}}>{yuzde}</Text>
                </View>      
                </View>
                </View>
            </View>
            )
          })}
          </View>
        </View>
       
        <View style={{flex:7}}>
        <View style={{marginHorizontal:20,marginTop:12}}>
        <View style={styles.Bottomcizgi}></View>
        </View>
             <View style={styles.loginSection}>

                 <View style={styles.fieldSet}>
                 <Image style={{position:'absolute',marginHorizontal:25,marginTop:30}} source={require('../assets/img/moneydolar.png')}/>
                 <CustomTextInput
                    autoCapitalize={'none'}
                    // placeholder={'Email'}
                    editable={true}
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={inputUsername => this.setState({inputUsername})}
                    // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
                    style={styles.input}
                    onSubmit={() => this.inputUsername.focus()}>
                    </CustomTextInput>
                    <Text style={styles.legend}>Value</Text>
                </View>
                <View style={styles.fieldSet}>
                <Image style={{position:'absolute',marginHorizontal:25,marginTop:30}} source={require('../assets/img/amountbtc.png')}/>
                    <CustomTextInput
                    style={styles.input}
                    autoCapitalize={'none'}
                    // placeholder={'Password'}
                    editable={true}
                    // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
                    placeholderTextColor="black"
                    onChangeText={inputMail => this.setState({inputMail})}
                    onSubmit={() => this.inputMail.focus()}>
                    </CustomTextInput>
                    <Text style={styles.legend}>Amount</Text>

                </View>
            <CustomButton
            style={{backgroundColor:'#0073F7'}}
            // onPress={() => this.props.navigation.navigate('Login')}
            onPress={() => Alert.alert('BTC satış işlemi gerçekleşti.')}
            title={'Buy'}
            />
            <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
            <Text>Use limit order</Text>
            <View>
            <Text style={{width:1,top:-47,position:'absolute',height:95,transform: [{ rotate: '90deg'}],backgroundColor:'black'}}></Text>
            </View>

            </View>
           
            </View>
         </View>
        
        <View style={{flex:1}}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Bottomcizgi: {
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    opacity: 0.3,
    top:-5
  },
  container: {
    flex: 1,
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
    height: 30,
  },
  generalTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: STATUSBAR_HEIGHT + 10,
    backgroundColor: '#091361',
    paddingBottom: 35,
  },

  Content: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 30,
    paddingHorizontal:20
  },
  ContentRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  Description: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  PortfolioContent: {
    flex: 1,
    marginTop:-5,
    backgroundColor: '#f2f2f2',
    marginTop:10
  },
  loginSection: {
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:10,
  },
  input: {
    color: 'black',
    fontSize: 16,
    width: '100%',
    height: 55,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    opacity: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingTop:5
  },
legend:{
    position: 'absolute',
    top: 4,
    left: 10,
    fontWeight: '400',
    backgroundColor: '#f2f2f2',
    paddingLeft:10,
    paddingRight:10,
    fontSize:12
  },

});

export default MarketCoinBuy;
