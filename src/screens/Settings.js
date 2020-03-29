import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import fsManager from '../../fs-manager';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export class Settings extends Component {

  state = {
    switchValue:false, 
  }
  toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }
  state = {
    settingsData: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      settingsData: [
        {
          Aboutitle: 'ABOUT',
          Cur: 'Currency',
          Usd: 'USD',
          Pri: 'Privacy Policy',
          Term: 'Terms of use',
          Apptitle: 'APP',
          Touch: 'Touch ID',
          Sup: 'Support',
          Report: 'Report a Bug',
          AppVer: 'App Version 1.0',
        },
      ],
    };
  }

  async componentWillMount(){
 
    let profile = await fsManager.getUser()
    profile = JSON.parse(profile)
    this.setState({
      userDisplayName: profile.username //  profile.name + ' ' + profile.lastname
    })
  }

  render() {
    const { userDisplayName } = this.state

    return (
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
              Settings
            </Text>
          </View>
          <View style={{flex: 0.5}}></View>
        </View>

        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View style={styles.portfolioLeft}>
              <Image source={require('../assets/img/Resim.png')}></Image>
              <View style={{marginHorizontal: 20, marginTop: 10}}>
                <Text style={{fontWeight: 'bold',color:'black'}}>{userDisplayName}</Text>
              </View>
            </View>

            <View style={styles.portfolioRight}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSettings')}
              style={styles.EditButton}>
                <Image source={require('../assets/img/Edit.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 4,marginVertical: 0,marginHorizontal: 20,alignItems: 'flex-start'}}>
          <ScrollView style={{width: '100%'}}>
            {this.state.settingsData.map(
              (
                {Aboutitle,Cur,Usd,Pri,Term,Apptitle,Touch,Sup,Report,AppVer},index,) => {
                return (
                  <View style={{flexDirection: 'column',flex: 1,marginVertical:15,marginHorizontal: 10}} key={index}>
                  <Text style={styles.title}>{Aboutitle}</Text> 
                    <View onPress={() => this.onSelect({index})}>
                      <View style={{flexDirection: 'row',flex: 1,marginVertical: 20}}>
                        <Text style={styles.Description}>{Cur}</Text>
                        <View style={{flex: 1,alignItems: 'flex-end',marginHorizontal: 25}}>
                          <Text style={{fontWeight: '400', fontSize: 12}}>{Usd}</Text>
                     </View>
                    </View>
                    <View style={styles.Bottomcizgi}></View>
                    <View style={styles.Content}>
                        <Text style={styles.Description}>{Pri}</Text>
                        <View style={styles.ContentRight}>
                        <Icon style={{}} onPress={() => this.props.navigation.navigate('Home')} name="angle-right" size={18} color={'black'} />
                        </View>
                    </View>
                    <View style={styles.Bottomcizgi}></View>
                    <View style={styles.Content}>
                          <Text style={styles.Description}>{Term}</Text>
                          <View style={styles.ContentRight}>
                          <Icon style={{}} onPress={() => this.props.navigation.navigate('Home')} name="angle-right" size={18} color={'black'} />
                         </View>
                      </View>
                      <View style={styles.Bottomcizgi}></View>
                      </View>

                    <View style={{flexDirection: 'column',flex: 1,marginVertical: 35}}>
                    <Text style={styles.title}>{Apptitle}</Text>
                    <View style={styles.Content}>
                        <Text style={styles.Description}>{Touch}</Text>
                        <View style={{flex: 1,alignItems: 'flex-end',marginHorizontal: 0,marginTop:-10}}>
                         <Switch
                         trackColor={{true: '#0073F7', false: '#0073F7'}}
                         onValueChange = {this.toggleSwitch}
                         value = {this.state.switchValue}
                         />
                     </View>
                    </View>
                    <View style={styles.Bottomcizgi}></View>
                    <View style={styles.Content}>
                        <Text style={styles.Description}>{Sup}</Text>
                        <View style={styles.ContentRight}>
                        <Icon style={{}} onPress={() => this.props.navigation.navigate('Home')} name="angle-right" size={18} color={'black'} />
                     </View>
                  </View>
                  <View style={styles.Bottomcizgi}></View>
                  <View style={styles.Content}>
                  <Text style={styles.Description}>{Report}</Text>
                  <View style={styles.ContentRight}>
                  <Icon style={{}} onPress={() => this.props.navigation.navigate('Home')} name="angle-right" size={18} color={'black'} />
                   </View>
                   </View>
                   <View style={styles.Bottomcizgi}></View>
                   <View style={styles.Content}>
                   <Text style={styles.Description}>{AppVer}</Text>
                   <View style={styles.ContentRight}>
                   <Icon style={{}} onPress={() => this.props.navigation.navigate('Home')} name="angle-right" size={18} color={'black'} />
                  </View>
              </View>
              <View style={styles.Bottomcizgi}></View>

              <View style={{marginVertical:30,flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => this._logout() } >
                   <Image source={require('../assets/img/Logout.png')} />
                   <View style={{marginTop:-20,marginHorizontal:35}}>
                   <Text style={styles.logout}>Logout</Text>
                   </View>
                  </TouchableOpacity>
              </View>
                  </View>
                  </View>
                );
              },
            )}
          </ScrollView>
        </View>
      </View>
    );
  }

  _logout = () => {
    fsManager.logout();
    this.props.navigation.navigate('Login')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginTop: -5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor:'#f2f2f2'
  },
  headerInner: {
    marginHorizontal: 5,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  portfolioLeft: {
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  portfolioRight: {
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 3,
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
    paddingTop: STATUSBAR_HEIGHT + 20,
    backgroundColor: '#091361',
    paddingBottom: 20,
  },
  title: {
    color: '#7E7E7E',
    fontSize: 14,
    fontWeight: '400',
  },
  logout: {
    color: '#FF4200',
    fontSize: 18,
    fontWeight: '400',
  },
  Bottomcizgi: {
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    opacity: 0.3
  },
  Content: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20
  },
  ContentRight: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: 10
  },
  Description: {
    color: 'black',
    fontSize: 16
  },
  EditButton: {
    backgroundColor: '#0073F7',
    width: 35,
    borderRadius: 50,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Settings;
