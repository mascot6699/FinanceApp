import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  NativeModules,
  Platform,
} from 'react-native';
import data from '../../db/notiData';

// const SCREEN_HEIGHT = Dimensions.get('window').height;
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 25 : StatusBarManager.HEIGHT;

export class Notifications extends Component {
  renderNotiItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Image style={styles.avatar} source={item.value} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.titleDescription}>{item.titleDescription}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <View style={styles.generalTop}>
          <View style={styles.headerLeft}></View>
          <View style={styles.headerCenter}>
            <Text style={{color: '#D8D8D8', fontWeight: '500', fontSize: 18}}>
              Notifications
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <FlatList
          data={data}
          renderItem={this.renderNotiItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
    marginHorizontal: 20,
    height: 115,
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
    paddingVertical: -5,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  titleDescription: {
    fontSize: 14,
    fontWeight: '400',
    paddingVertical: 5,
    color: '#7E7E7E',
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
  },
  generalTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: STATUSBAR_HEIGHT + 30,
    backgroundColor: '#060D4A',
    paddingBottom: 10,
  },
});

export default Notifications;
