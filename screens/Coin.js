import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, NativeModules, Platform} from 'react-native';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropdownUp from '../components/DrowdownUp';
import Icon from 'react-native-vector-icons/FontAwesome';
import Area from '../src/Area';


const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

  // const data2 = [
  //   { val: 370, ts: new Date().getTime() - 17 * 60000 },
  //   { val: 420, ts: new Date().getTime() - 16 * 60000 },
  //   { val: 380, ts: new Date().getTime() - 15 * 60000 },
  //   { val: 400, ts: new Date().getTime() - 14 * 60000 },
  //   { val: 350, ts: new Date().getTime() - 13 * 60000 },
  //   { val: 300, ts: new Date().getTime() - 12 * 60000 },
  //   { val: 330, ts: new Date().getTime() - 11 * 60000 },
  //   { val: 290, ts: new Date().getTime() - 10 * 60000 },
  //   { val: 360, ts: new Date().getTime() - 9 * 60000 },
    
  // ].reverse();



export class Coin extends Component {

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
      const data = [
        -150,
        100,
        110,
        110,
        150,
        110,
        200,
        170,
        170,
        115,
        125,
        100,
        115,
        101,
        84,
        110,
        120,
        115,
        125,
        100,
        115,
        100,
        -150,
      ];
      const svgBg = {fill: '#111111'};
      const axesSvg = {fontSize: 10, fill: 'black'};
      const verticalContentInset = {top: 50};
      const verticalContentInsett = {top: 10};
      const xAxisHeight = 10;

        // const Coin = ({
        //     data,
        //     max,
        //     min,
        //     lastprice
        //   }) => {}
        return (
            <View style={{flex:1}}>
            <View style={styles.generalTop}>
            <View style={styles.headerLeft}>
              <Icon
                style={{}}
                onPress={() => this.props.navigation.navigate('Wallet')}
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
            <View style={{flex:0.5,backgroundColor:'#f2f2f2',borderTopRightRadius:7,borderTopLeftRadius:7,marginTop:-5}}>
            <View style={{marginHorizontal:20}}>
              {this.state.property.map(({ btc, price, btcDesc, yuzde }, index) => {
                return (
                  <View style={{height: 90,marginVertical:10 }} key={index}>
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
                               <View style={{marginTop:10,marginHorizontal:50}}>
                                  <Text style={{fontSize:12,color:'black'}}>{btcDesc}</Text>
                          <DropdownUp style={{backgroundColor:'red',left:110,top:15,flex:0.01}} />
                                  <Text style={{left:45,top:-15,fontSize:12}}>{yuzde}</Text>

                               </View>      
                          </View>

                  </View>
                  <View style={styles.Bottomcizgi}></View>
                  </View>

                )
              })}
          </View>
            </View>
            <View style={{flex:3,paddingHorizontal:35,paddingVertical:50,flexDirection:'column'}}>
            <View style={{flex:0.2,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:15,color:'black',fontWeight:'500'}}>1 Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:15}}>24 Hours</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:15}}>7 Days</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:15}}>30 Days</Text>
            </TouchableOpacity>
            </View>

            <View style={{height: 250,flexDirection: 'row',marginTop:-20}}>
            <View
              style={{
                flexDirection: 'column',
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
              }}>
              <YAxis
                data={data}
                numberOfTicks={4}
                style={{
                  top: 60,
                  height: 180,
                  marginLeft:-5
                }}
                contentInset={verticalContentInsett}
                formatLabel={value => `$${value} K`}
                svg={svgBg}
              />
            </View>
            <View style={{flex: 1,}}>
              <LineChart
                style={{flex: 1}}
                data={data}
                svg={{
                  stroke: '#F07041',
                  fill: '#FD5328',
                  fillOpacity: 0.1,
                  strokeWidth: 1.5,
                }}
                contentInset={verticalContentInset}>
                <Grid svg={{stroke: null}} />
              </LineChart>
              <XAxis
                style={{marginLeft: 10, height: xAxisHeight, top: -15}}
                data={data}
                formatLabel={value => `${value} 19:50 PM`}
                contentInset={{left: 35, right: 20}}
                numberOfTicks={3}
                svg={axesSvg}
              />
            </View>
          </View>

            <View style={{flex:0.5,alignItems:'flex-start',top:20}}>
              <View style={{flex:1}}>
              <View style={styles.Bottomcizgii}></View>
              {this.state.property.map(({ Val, ValDescr, Monts, MontsDescr }, index) => {
                return (
                  <View style={{flex:1,paddingVertical:10,marginHorizontal:-10}} key={index}>
                  <View style={styles.SectionBottom}>
                          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                          <Text style={{color:'black',fontWeight:'400',opacity:0.7}}>{Val}</Text>
                          <Text style={{paddingHorizontal:75,paddingVertical:5,color:'black',fontWeight:'400',opacity:0.7}}>{Monts}</Text>
                          </View>
                          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                            <Text style={{}}>{ValDescr}</Text>
                            <Text style={{paddingHorizontal:45,paddingVertical:5}}>{MontsDescr}</Text>
                          </View>      

                  <View style={{flexDirection:'row',paddingVertical:20}}>
                  <View style={{width:'50%',}}> 
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('MarketCoinBuy')}
                    style={{width:'90%',height:55,backgroundColor:'#0073F7',alignItems:'center',justifyContent:'center',borderRadius:5,}}>
                    <Text style={{color:'white'}}>Buy</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{width:'50%',marginHorizontal:5}}> 
                    <TouchableOpacity style={{width:'90%',height:55,backgroundColor:'#0073F7',alignItems:'center',borderRadius:5,justifyContent:'center'}}>  
                    <Text style={{color:'white'}}>Sell</Text>
                    </TouchableOpacity>
                    </View>  

                    </View>  
                </View>
                </View>
                )
              })}
            </View>
           </View>
          </View>
          </View>

        )
    }
}
const styles = StyleSheet.create({
  Bottomcizgi: {
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    opacity: 0.3,
    top:15,
    marginRight:30,
    marginLeft:20
  },
  Bottomcizgii: {
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    opacity: 0.3,
    top:-10,
    marginRight:5,
    marginLeft:0
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
    paddingHorizontal: 10
  },
  Description: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  SectionBottom: {
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    paddingHorizontal:10,
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
  
  
})


export default Coin;
