import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  YellowBox,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import CustomTextInput from '../../components/CustomTextInput';
import Data from '../../db/data';
import ActionButton from 'react-native-action-button';
// import Ex from '../components/ex';
import { Tab, Tabs, TabHeading } from 'native-base';

// import CustomLine from '../components/CustomLine';
// import CustomTabText from '../components/CustomTabText';

// import CustomFloatingAction from '../components/CustomFloatingAction';
// import FloatingAnimatedButton from '../components/FloatingAnimatedButton'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export class Market extends Component {
  state = {
    opacity: 1,
    // selectedTab: "Transaction",
    activeSections: [],
    textColor: 'white',
    text: '',
    headerData: [],
    contacts: Data,
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {activeTab: 0, initialTab: 0}
    this.state = { selectedButton: null };
    this.selectionOnPress = this.selectionOnPress.bind(this);
    this.state = {
      headerData: [
        {
          cryptotitle: 'CRYPTO',
          crptoPrice: '$1,585',
          cashTitle: 'CASH',
          cashPrice: '$792',
          custodyTitle: 'CUSTODY',
          custodyPrice: '$5,081',
        },
      ],
      selectedSlice: {
        label: 'ALL ASSETS',
        value: '$7,459.60',
      },
      labelWidth: 0,
    };
  }
  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
}
_onPressIn = () => {
  this.setState({
      textColor: 'green'
  });
}

_onPressOut = () => {
  this.setState({
      textColor: 'white'
  });
}
//   setTab = (name) => {
//     this.setState({ selectedTab: name })
//     // if (this.state.main) {
//     //     let contents = this.state.main.filter(x => x.fonMarket === name)
//     //     this.setState({
//     //         contents: contents
//     //     })
//     // }
// }

  searchFilter = text => {
    const newData = Data.filter(item => {
      const listItem = `${item.titleDescription.toLowerCase()} ${item.title.toLowerCase()}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      contacts: newData,
    });
  };

  renderHeader = () => {
    return (
      <View>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#e2e2e2',
            height: 50,
            backgroundColor:'#f2f2f2',
            flexDirection: 'column',
            flex: 1,
            marginHorizontal: 30,
            borderRadius: 8,
          }}>
          <View
            style={{
              width: '100%',
              height: 60,
              justifyContent: 'center',
              paddingHorizontal: 20,
              flexDirection: 'column',
            }}>
            <CustomTextInput
              autoCapitalize={'none'}
              placeholder={'Search...'}
              editable={true}
              placeholderTextColor="black"
              onChangeText={text => {
                this.setState({text});
                this.searchFilter(text);
              }}
              // onSubmitEditing= {() => this.Login(this.state.email, this.state.password)}
              style={styles.input}
              onSubmit={() => this.text.focus()}></CustomTextInput>
            <Image
              style={{top: -38, marginLeft: 0}}
              source={require('../assets/img/search.png')}></Image>
          </View>
        </View>
      </View>
    );
  };

  renderContacksItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.avatar} source={item.value} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.titleDescription}>{item.titleDescription}</Text>
        </View>
        <View style={styles.textContainerRight}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.priceBold}>{item.priceBold}</Text>
        </View>
      </View>
    );
  };

  render() {
    const {labelWidth, selectedSlice, selectedTab} = this.state;
    const {label, value} = selectedSlice;
    const keys = ['Crypto', 'Cash', 'Custody', 'Cryptos', 'Cashs', 'Custodys'];
    const values = [50, 50, 50, 50, 50, 50];
    const colors = ['#51A553', '#0073F7', '#ED6E33', 'red', 'purple', 'pink'];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: {fill: colors[index]},
        arc: {
          outerRadius: 70 + values[index] + '%',
          padAngle: label === key ? 0.1 : 0.02,
        },
        onPress: () =>
          this.setState({selectedSlice: {label: key, value: values[index]}}),
      };
    });
    const deviceWidth = Dimensions.get('window').width;

    return (
      <View style={{flex: 1,backgroundColor:'white',}}>
        <View style={{flexDirection: 'column', flex: 1,backgroundColor:'white',}}>
          <View style={{justifyContent: 'center', flex: 0.5,backgroundColor:'white',}}>
            <PieChart
              style={{height: 180}}
              outerRadius={'80%'}
              innerRadius={'70%'}
              data={data}
            />
            <Text
              onLayout={({
                nativeEvent: {
                  layout: {width},
                },
              }) => {
                this.setState({labelWidth: width});
              }}
              style={{
                position: 'absolute',
                left: deviceWidth / 2 - labelWidth / 2,
                top: deviceWidth / 2- labelWidth / 3,
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 16,
                marginTop:-40
              }}>
              {`${label} \n ${value}`}
            </Text>
            <View
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                top:10,
              }}>
              {this.state.headerData.map(
                (
                  {
                    cryptotitle,
                    crptoPrice,
                    cashTitle,
                    cashPrice,
                    custodyTitle,
                    custodyPrice,
                  },
                  key,
                ) => {
                  return (
                    <View
                      style={{
                        marginHorizontal: 20,
                        flexDirection: 'column',
                        height: 55,
                      }}
                      key={key}
                      onPress={() => this.onSelect({key})}>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '90%',
                            paddingVertical: 5,
                            marginHorizontal: 10,
                          }}>
                          <Text
                            style={{
                              marginHorizontal: 15,
                              color: 'black',
                              fontSize: 18,
                              fontWeight: '600',
                            }}>
                            {crptoPrice}
                          </Text>
                          <Text
                            style={{
                              fontWeight: '600',
                              marginHorizontal: 55,
                              color: 'black',
                              fontSize: 18,
                            }}>
                            {cashPrice}
                          </Text>
                          <Text
                            style={{
                              fontWeight: '600',
                              marginHorizontal: 5,
                              color: 'black',
                              fontSize: 18,
                            }}>
                            {custodyPrice}
                          </Text>
                        </View>
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginHorizontal: 10,
                              width: '90%',
                            }}>
                            <Text
                              style={{
                                marginHorizontal: 25,
                                color: 'black',
                                fontSize: 10,
                              }}>
                              {cryptotitle}
                            </Text>
                            <Image
                              style={{top: 10, right: 50}}
                              source={require('../assets/img/turuncu.png')}
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 10,
                                marginHorizontal: 55,
                              }}>
                              {cashTitle}
                            </Text>
                            <Image
                              style={{top: 10, right: 70}}
                              source={require('../assets/img/yesil.png')}
                            />

                            <Text
                              style={{
                                marginHorizontal: 15,
                                color: 'black',
                                fontSize: 10,
                              }}>
                              {custodyTitle}
                            </Text>
                            <Image
                              style={{top: 10, right: 0, left: -40}}
                              source={require('../assets/img/mavi.png')}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                },
              )}
            </View>
          </View>
          <View style={{flexDirection:'row',height:50,flex:0.1,backgroundColor:'white'}}>
        <Tabs initialPage={this.state.initialPage} page={this.state.activeTab}>
          <Tab 
          heading={<TabHeading><Text>All Assets</Text></TabHeading>}>
          </Tab>
          <Tab heading={<TabHeading><Text>Custody</Text></TabHeading>}>
          </Tab>
          <Tab heading={<TabHeading><Text>Crypto</Text></TabHeading>}>
          </Tab>
        </Tabs>
         </View>

          <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountDetails')}>
            <FlatList
              ListHeaderComponent={this.renderHeader}
              renderItem={this.renderContacksItem}
              keyExtractor={item => item.id}
              data={Data}
            />
            </TouchableOpacity>
           
          </View>
          <View
          style={{
            
          }}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AccountDetails')}
          >
          <View
          style={{
            backgroundColor: 'red',
            marginTop: -100,
            flex: 0.001,
          }}>
          <ActionButton
            //   btnOutRange={'#3498db'}
            bgColor={'blue'}
            activeOpacity={0.85}
            degrees={90}
            spacing={25}
            type="tab"
            offsetX={35}
            offsetY={35}
            onPress={() => this.setState({opacity: !this.state.opacity? 0.7 : 1}) }
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
              onPress={() => alert('Take a Loan')}>
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
              onPress={() => alert('Added new Account')}>
              <Image
                source={require('../assets/img/Icon1.png')}
                style={styles.actionButtonIcon1}
              />
            </ActionButton.Item>
          </ActionButton>
        </View>

          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 0.6,
    backgroundColor:'white'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  avatar: {
    marginHorizontal: 20,
    top: -5,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    top: -5,
  },
  textContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  titleDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  textContainerRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 20,
    padding: 10,
  },
  price: {
    marginHorizontal: 20,
  },
  priceBold: {
    fontWeight: '600',
  },
  input: {
    color: 'black',
    fontSize: 16,
    width: '100%',
    height: 60,
    paddingHorizontal: 30,
    opacity: 1,
    marginTop: 20,
  },
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
export default Market;
