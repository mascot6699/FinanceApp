import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image, NativeModules, Platform, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import wData from '../../db/wData';
import Icon from 'react-native-vector-icons/FontAwesome';
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 25 : StatusBarManager.HEIGHT;

export class Wallet extends Component {
  state = {
    text: '',
    searchFilt: wData,
  };

  searchFilter = text => {
    const newData = wData.filter(item => {
      const listItem = `${item.titleDescription.toLowerCase()} ${item.title?.toLowerCase()}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      searchFilt: newData,
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
            height: 60,
            backgroundColor: '#f2f2f2',
            flexDirection: 'column',
            flex: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginTop: -5,
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
              style={{top: -40, marginLeft: 5}}
              source={require('../assets/img/search.png')}></Image>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#e2e2e2',
            height: 60,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '20%',
              paddingHorizontal: 20,
              marginHorizontal: 25,
            }}>
            <Text style={{color: '#979797', fontSize: 16, fontWeight: '600'}}>
              USD
            </Text>
            <Icon
              style={{marginHorizontal: 10, marginTop: -2}}
              onPress={() => this.props.navigation.navigate('More')}
              name="angle-down"
              size={22}
              color={'#7E7E7E'}
            />
          </View>
        </View>
      </View>
    );
  };

  rendercontactWallet = ({item}) => {
    return (
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Coin')}
      >
      <View style={styles.itemContainer}>
          <Image style={styles.avatar} source={{uri: item.picture}} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.titleDescription}>{item.titleDescription}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.textContainerRight}>
            <Text style={styles.priceBold}>{item.priceBold}</Text>
          </View>
      </View>
      </TouchableOpacity>

    );
  };
  render() {
    return (
      <View style={styles.bottom} enableOnAndroid={true}>
        <View style={styles.container}>
          <View style={styles.generalTop}>
            <View style={styles.headerLeft}>
              <Icon
                style={{}}
                onPress={() => this.props.navigation.navigate('More')}
                name="angle-left"
                size={18}
                color={'white'}
              />
            </View>
            <View style={styles.headerCenter}>
              <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 16}}>
                Crypto Market
              </Text>
            </View>
            <View style={{flex: 0.5}}></View>
          </View>
          <FlatList
            ListHeaderComponent={this.renderHeader}
            data={this.state.searchFilt}
            renderItem={this.rendercontactWallet}
            keyExtractor={item => item.id}
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
  bottom: {
    flex: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    marginTop: -10,
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
    width: 32,
    height: 32,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  textContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    flex: 1,
  },
  titleDescription: {
    fontSize: 12,
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
    flexDirection: 'row',
    marginTop: -14,
    paddingLeft: 50,
    fontSize: 12,
  },
  priceBold: {
    fontWeight: '400',
  },
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 35,
    top:5
  },
  headerCenter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    top: 10,
  },
  generalTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: STATUSBAR_HEIGHT + 20,
    backgroundColor: '#060D4A',
    paddingBottom: 25,
  },
  input: {
    color: 'black',
    fontSize: 16,
    width: '100%',
    height: 60,
    paddingHorizontal: 30,
    opacity: 1,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default Wallet;
