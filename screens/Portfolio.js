import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  NativeModules,
} from 'react-native';
import data from '../JsonData/watchListdata';
// import Dropdown from '../components/Dropdown';
import DropdownUp from '../components/DrowdownUp';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../dictionary/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MoreButtonIcon from '../components/MoreButtonIcon';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 25 : StatusBarManager.HEIGHT;
// import DropdownUp from '../components/DrowdownUp';

export class Portfolio extends Component {
  renderContacksItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
      <View style={{borderTopLeftRadius:8,borderTopRightRadius:8,marginTop:-5}}></View>
        <Image style={styles.avatar} source={item.value} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.clockImage}
              source={require('../assets/img/clock.png')}
            />
            <Text style={styles.titleClock}>{item.clock}</Text>
            <Text style={styles.dikeyCizgi}></Text>
            <Text style={styles.titleDescription}>{item.titleDescription}</Text>
          </View>
        </View>
        <View style={styles.textContainerRight}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.priceGreen}>{item.priceGreen}</Text>
          <DropdownUp />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
       <View style={{flex:1}}>
       <View style={{flex:1}}>
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
           Watchlist
         </Text>
       </View>
       <View style={styles.heaederRights}>
         <MoreButtonIcon />
       </View>
     </View>
     <FlatList
       data={data}
       renderItem={this.renderContacksItem}
       keyExtractor={item => item.id}
     />
       </View>
       
        
       <View style={{alignItems:'flex-end',justifyContent:'center'}}>
       <TouchableOpacity
       onPress={() => this.props.navigation.navigate('HomeDetail')}
       >
       <Image style={{marginTop:100}} source={require('../assets/img/Primary.png')}></Image>
     </TouchableOpacity>
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
  itemContainer: {
    flex: 0.5,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  avatar: {
    marginHorizontal: 20,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    top: -5,
  },
  textContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    padding: 5,
  },
  titleDescription: {
    fontSize: 12,
    fontWeight: '400',
  },
  textContainerRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 25,
  },
  price: {},
  priceGreen: {
    fontSize: 12,
    fontWeight: '300',
    color: '#317A33',
  },
  // priceRed: {
  //   color: '#FF0000',
  //   fontSize: 12,
  // },
  titleClock: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '300',
    marginHorizontal: 2,
  },
  clockImage: {
    top: 1,
  },
  dikeyCizgi: {
    borderWidth: 0.3,
    borderColor: 'black',
    marginHorizontal: 5,
    opacity: 0.3,
    height: 15,
  },
  headerLeft: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 35,
  },
  heaederRights: {
    flex: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    right: 10,
    top: 6,
  },
  headerCenter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    top: 4,
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
});

export default Portfolio;
