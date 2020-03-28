import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, NativeModules, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomLine from '../components/CustomLine';
import CustomTab from '../components/CustomTab';
import Data from '../JsonData/dataAccount';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export class AccountDetails extends Component {
  state = {
    selectedTab: "Transactions",
    activeSections: [],
    main: [],
    fonMarket: [],
    accountProperty: [
      {
        ubsLogo: 'UBS',
        IbanTitle: 'IBAN',
        Iban: 'CH93 0076 2011 6238 5295 7',
        AccountNoTitle: 'Account No',
        AccountNo: '81867789',
        BalanceTitle: 'Balance',
        BalanceDesc: 'CHF 1,500',
        TypeTitle: 'Type',
        Type: 'Joint Account',
      },
    ],
  };

  setTab = (name) => {
    this.setState({ selectedTab: name })
    // if (this.state.main) {
    //     let contents = this.state.main.filter(x => x.fonMarket === name)
    //     this.setState({
    //         contents: contents
    //     })
    // }
}

renderContacksItem = ({item, index}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.titleDescription}>{item.titleDescription}</Text>
        <Text style={styles.clockNo}>{item.clockNo}</Text>
        </View>
      </View>
      <View style={styles.textContainerRight}>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

  render() {
    const { selectedTab } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}>
            <Icon
              style={{}}
              onPress={() => this.props.navigation.navigate('Market')}
              name="angle-left"
              size={18}
              color={'white'}
            />
          </View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 16}}>
              Account Details
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>

        <View style={styles.DetailGeneral}>
          <View style={styles.DetailInner}>
          <View>

          {this.state.accountProperty.map(({ ubsLogo, IbanTitle, Iban }, index) => {
            return (
              <View key={index}>
               <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/img/ubs.png')}/>
                    <View style={{marginHorizontal:10}}>
                        <Text style={styles.Description}>{ubsLogo}</Text>
                    </View>
               <View style={{marginHorizontal:55,paddingTop:2}}> 
                <Text>{IbanTitle}</Text>
                <Text>{Iban}</Text>
                <View style={{alignItems:'flex-end',marginTop:-15,marginHorizontal:-20}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/img/Save.png')} />
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

        <View style={styles.center}>
        <View style={{width: '100%',height: 50,justifyContent: 'center',top:10}}>

        {this.state.accountProperty.map(({AccountNoTitle,AccountNo,BalanceTitle,BalanceDesc,TypeTitle,Type},key) => {
            return (
            <View style={{flexDirection:'column',height: 55,marginHorizontal:20}} key={key} onPress={() => this.onSelect({key})}>
            <View style={styles.Bottomcizgi}></View>

                <View>
                  <View style={{ flexDirection: 'row',width: '100%'}}>
                    <View style={{flexDirection:'column',height:40,}}>
                    <Text style={{marginBottom:5,fontSize:12}}>{AccountNoTitle}</Text>
                    <Text style={{fontSize:14,color:'black',fontWeight:'400'}}>{AccountNo}</Text>
                    </View>
                    <View style={{flexDirection:'column',height:40,marginHorizontal:90}}>
                    <Text style={{marginBottom:5,fontSize:12}}>{BalanceTitle}</Text>
                    <Text style={{fontWeight:'600'}}>{BalanceDesc}</Text>
                    </View>
                    <View style={{flexDirection:'column',height:40,alignItems:'center',justifyContent:'center',marginHorizontal:-35}}>
                    <Text style={{marginBottom:5,left:-28,fontSize:12}}>{TypeTitle}</Text>
                    <Text style={{fontWeight:'600'}}>{Type}</Text>
                    </View>
                  </View>
              </View>
          
            </View>
            
            );
          },
        )}
      </View>
        </View>
          <View style={styles.bottom}>
          <CustomLine style={{ height: 55,width:'100%'}}>
          <CustomTab title="Transactions" onPress={() => { this.setTab('Transactions') }} active={selectedTab == "Transactions"} style={{}}></CustomTab>
          <CustomTab title="Income" onPress={() => { this.setTab('Income') }} active={selectedTab == "Income"} style={{}}></CustomTab>
          <CustomTab title="Expense" onPress={() => { this.setTab('Expense') }} active={selectedTab == "Expense"} style={{}}></CustomTab>
          </CustomLine>
          <FlatList
          renderItem={this.renderContacksItem}
          keyExtractor={item => item.id}
          data={Data}
        />
       
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
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
    paddingBottom: 30,
  },
  DetailGeneral: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginTop: -5,
  },
  DetailInner: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingTop:20,
  },
  center: {
    flex: 0.3,
    backgroundColor:'white'
  },
  bottom: {
    flex: 3,
    backgroundColor:'white'

  },
  Description: {
    color:'red',
    fontWeight:'500',
    fontSize: 26,
    left: -5
  },
  Bottomcizgi: {
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    opacity: 0.3,
    top:-30,
},
itemContainer: {
  flex: 1,
  flexDirection: 'row',
  paddingVertical: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#E2E2E2',
  marginHorizontal:5
},
title: {
  fontSize: 16,
  top: -5,
  fontWeight:'400',
},
textContainer: {
  flexDirection: 'column',
  marginHorizontal: 20,
},
titleDescription: {
  fontSize: 14,
  fontWeight: '500',
  opacity: 0.5,
},
textContainerRight: {
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  flex: 1,
},
price: {
  marginHorizontal: 10,
},
clockNo: {
  opacity: 0.5,
  marginHorizontal:10,
  fontSize:14,
  fontWeight: '500',
}
});

export default AccountDetails;
