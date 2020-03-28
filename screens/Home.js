import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  StatusBar
} from 'react-native';
import {imagePaths} from '../dictionary/path';
import data from '../data';
import FullHeightButton from '../components/FullHeightButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';


// const SCREEN_HEIGHT = Dimensions.get('window').height;

export class Home extends Component {
  state = {
    headerData: [],
  };
  constructor(props) {
    super(props);

    this.state = {
      headerData: [
        {
          titlee: 'BALANCE',
          titlePrice: '$7,469.50',
          cryptotitle: 'CRYPTO',
          crptoPrice: '$1,585',
          cashTitle: 'CASH',
          cashPrice: '$792',
          custodyTitle: 'CUSTODY',
          custodyPrice: '$5,081',
        },
      ],
    };
  }

  renderContacksItem = ({item, index}) => {
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
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={[styles.bottom, { backgroundColor: '#060D4A' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#060D4A"/>
      <KeyboardAwareScrollView style={styles.bottom} enableOnAndroid={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <ImageBackground
                source={imagePaths.background}
                style={{
                  width: '100%',
                  height: Dimensions.get('window').height / 3,
                }}>
                <View style={{alignItems: 'flex-end'}}>
                  <Image source={require('../assets/img/Oval.png')}></Image>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flex: 0.7,
                    position: 'relative',
                    marginTop:-100
                  }}>
                  {this.state.headerData.map(({titlee, titlePrice}, key) => {
                    return (
                      <View
                        style={{alignItems: 'center', justifyContent: 'center'}}
                        key={key}
                        onPress={() => this.onSelect({titlee})}>
                        <Text
                          style={{
                            color: '#979797',
                            fontSize: 12,
                            fontWeight: 'bold',
                          }}>
                          {titlee}
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 38,
                            fontWeight: '600',
                          }}>
                          {titlePrice}
                        </Text>
                      </View>
                    );
                  })}
                </View>
                <View style={{position: 'relative', top: -40}}>
                  <Image source={require('../assets/img/Ovaltwo.png')}></Image>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    top: -40,
                    justifyContent: 'center',
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
                            marginHorizontal: 30,
                            flexDirection: 'column',
                            height: 45,
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
                                  marginHorizontal: 20,
                                  color: '#D8D8D8',
                                  fontSize: 12,
                                }}>
                                {cryptotitle}
                              </Text>
                              <Text
                                style={{
                                  marginHorizontal: 60,
                                  color: '#D8D8D8',
                                  fontSize: 12,
                                }}>
                                {cashTitle}
                              </Text>
                              <Text
                                style={{
                                  marginHorizontal: 10,
                                  color: '#D8D8D8',
                                  fontSize: 12,
                                }}>
                                {custodyTitle}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 10,
                                width: '90%',
                              }}>
                              <Text
                                style={{
                                  marginHorizontal: 15,
                                  color: 'white',
                                  fontSize: 18,
                                  fontWeight: '600',
                                }}>
                                {crptoPrice}
                              </Text>
                              <Text
                                style={{
                                  marginHorizontal: 55,
                                  color: 'white',
                                  fontSize: 18,
                                  fontWeight: '600',
                                }}>
                                {cashPrice}
                              </Text>
                              <Text
                                style={{
                                  marginHorizontal: 5,
                                  color: 'white',
                                  fontSize: 18,
                                  fontWeight: '600',
                                }}>
                                {custodyPrice}
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    },
                  )}
                </View>
              </ImageBackground>
            </View>
          </View>
        
          <FlatList
            data={data}
            renderItem={this.renderContacksItem}
            keyExtractor={item => item.id}
          />
        </View>
      </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.8,
    backgroundColor: 'red',
  },
  bottom: {
    flex: 1.2,
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
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
    top:-5
  },
  titlee: {
    fontSize: 12,
    fontWeight: '500',
    top:-5
  },
  textContainer: {
    flexDirection: 'column',
    marginHorizontal:10,
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
});

export default Home;
