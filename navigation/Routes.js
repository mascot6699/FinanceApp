import * as React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Portfolio} from '../screens/Portfolio';
import {Wallet} from '../screens/Wallet';
import {Home} from '../screens/Home';
import {Notifications} from '../screens/Notifications';
import {More} from '../screens/More';
import {HomeDetail} from '../screens/HomeDetail';
import {Splash} from '../screens/Splash';
import {Settings} from '../screens/Settings';
import {Market} from '../screens/Market';
import {AccountSettings} from '../screens/AccountSettings';
import {Coin} from '../screens/Coin';
import {MarketCoinBuy} from '../screens/MarketCoinBuy';
import {AccountDetails} from '../screens/AccountDetails';
import {ForgetPassword} from '../screens/ForgetPassword';
import {ForgetPasswordTwo} from '../screens/ForgetPasswordTwo';
import {Confirmation} from '../screens/Confirmation';
import {Denemee} from '../screens/Denemee';
import {Watchlist} from '../screens/Watchlist';
// import {AuthContext} from './context';
import {Login} from '../Login';
import {Signup} from '../Signup';
import BackButton from '../components/BackButton';
import MoreButtonIcon from '../components/MoreButtonIcon';

// screens
export const MyContext = React.createContext();
// const {navigate} = this.props.navigation;

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const PortfolioStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const MoreStack = createStackNavigator();
const WalletStack = createStackNavigator();
const SettingStack = createStackNavigator();
const MarketStack = createStackNavigator();
const AccountStack = createStackNavigator();
const CoinStack = createStackNavigator();
const MarketCoinBuyStack = createStackNavigator();
const AccountDetailsStack = createStackNavigator();
const ForgetPasswordStack = createStackNavigator();
const ForgetPasswordTwoStack = createStackNavigator();
const ConfirmationStack = createStackNavigator();

// const HomeStack = createStackNavigator();

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={Home} />
//   </HomeStack.Navigator>
// );
const ForgetPasswordTwoStackScreen = () => (
  <ForgetPasswordTwoStack.Navigator>
    <ForgetPasswordTwoStack.Screen
      name={'ForgetPasswordTwo'}
      component={ForgetPasswordTwo}
    />
  </ForgetPasswordTwoStack.Navigator>
);

const ConfirmationStackScreen = () => (
  <ConfirmationStack.Navigator>
    <ConfirmationStack.Screen name="Confirmation" component={Confirmation} />
  </ConfirmationStack.Navigator>
);

const ForgetPasswordStackScreen = () => (
  <ForgetPasswordStack.Navigator>
    <ForgetPasswordStack.Screen
      name="ForgetPassword"
      component={ForgetPassword}
    />
  </ForgetPasswordStack.Navigator>
);

const AccountDetailsStackScreen = ({navigation: {navigate}}) => (
  <AccountDetailsStack.Navigator>
    <AccountDetailsStack.Screen
      name="AccountDetails"
      component={AccountDetails}
      options={() => ({
        headerLeft: () => (
          <BackButton onPress={() => navigate('AccountDetails')} />
        ),
        headerStyle: {
          backgroundColor: '#060D4A',
          opacity: 1,
        },
        headerTintColor: '#fff',
        headerTitle: 'Crypto Market',
        headerTitleStyle: {
          fontWeight: '500',
          marginTop: -15,
        },
      })}
    />
  </AccountDetailsStack.Navigator>
);

const CoinStackScreen = () => (
  <CoinStack.Navigator>
    <CoinStack.Screen name="Coin" component={Coin} />
  </CoinStack.Navigator>
);

const MarketCoinBuyStackScreen = () => (
  <MarketCoinBuyStack.Navigator>
    <MarketCoinBuyStack.Screen name="MarketCoinBuy" component={MarketCoinBuy} />
  </MarketCoinBuyStack.Navigator>
);

const MarketStackScreen = () => (
  <MarketStack.Navigator>
    <MarketStack.Screen name="Market" component={Market} />
  </MarketStack.Navigator>
);

const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen
      name="AccountSettings"
      component={AccountSettings}
 
    />
  </AccountStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Settings" component={Settings} />
    <SettingStack.Screen name="AccountSettings" component={AccountSettings} />
  </SettingStack.Navigator>
);

const WalletStackScreen = () => (
  <WalletStack.Navigator>
    <WalletStack.Screen name="Wallet" component={Wallet} />
  </WalletStack.Navigator>
);

const PortfolioStackScreen = () => (
  <PortfolioStack.Navigator>
    <PortfolioStack.Screen
      name="Portfolio"
      component={Portfolio}
    />
    <PortfolioStack.Screen name="HomeDetail" component={HomeDetail} />
  </PortfolioStack.Navigator>
);



const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} />
    </MoreStack.Navigator>
  );
};

const TabsScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      showIcon: true,
      activeTintColor: '#000000',
    }}
    initialRouteName="Home"
    shifting={true}
    sceneAnimationEnabled={false}
    backBehavior="initialRoute">
    <Tab.Screen
      name="Portfolio"
      component={Portfolio}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('../assets/img/PortfolioAktif.png')
                  : require('../assets/img/Portfolio.png')
              }
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={Wallet}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('../assets/img/WalletAktif.png')
                  : require('../assets/img/wallet-3-fill.png')
              }
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          focused ?
          <View style={{width:66,backgroundColor:'white',borderRadius:50,height:66,flexDirection:'column',marginTop:-5}}>
          <Image style={{marginHorizontal:13,marginTop:9}} source={require('../assets/img/HomeAktif.png')} />
          </View>:
          <View style={{width:66,backgroundColor:'white',borderRadius:50,height:66,flexDirection:'column',marginTop:-5}}>
          <Image style={{marginHorizontal:13,marginTop:9}} source={require('../assets/img/Homepasif.png')} />
          </View>

        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('../assets/img/NotificationsAktif.png')
                  : require('../assets/img/notifications.png')
              }
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="More"
      component={More}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('../assets/img/MoreAktif.png')
                  : require('../assets/img/More.png')
              }
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      singUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <MyContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} />
            <Drawer.Screen name="More" component={MoreStackScreen} />
            <Drawer.Screen name="Portfolio" component={Portfolio} />
            <Drawer.Screen
              name="AccountSettings"
              component={AccountSettings}
            />
            <Drawer.Screen
              name="AccountDetails"
              component={AccountDetailsStackScreen}
            />
            <Drawer.Screen
              name="Notifications"
              component={Notifications}
            />
            <Drawer.Screen name="Wallet" component={WalletStackScreen} />
            <Drawer.Screen name="Market" component={MarketStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsStackScreen} />
            <Drawer.Screen name="Watchlist" component={Watchlist} />
            <Drawer.Screen name="Coin" component={Coin} />
            <Drawer.Screen
              name="MarketCoinBuy"
              component={MarketCoinBuyStackScreen}
            />
            <Drawer.Screen
              name="ForgetPassword"
              component={ForgetPasswordStackScreen}
            />
            <Drawer.Screen
              name="Confirmation"
              component={ConfirmationStackScreen}
            />
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator headerMode={'none'} initialRouteName={'Home'}>
            <AuthStack.Screen name="Home" component={TabsScreen} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Signup" component={Signup} />
            <AuthStack.Screen name="More" component={More} />
            <AuthStack.Screen name="Denemee" component={Denemee} />
            <AuthStack.Screen name="Market" component={Market} />
            <AuthStack.Screen name="Settings" component={Settings} />
            <AuthStack.Screen name="Watchlist" component={Watchlist} />
            <AuthStack.Screen
              name="AccountSettings"
              component={AccountSettings}
            />
            <AuthStack.Screen
              name="AccountDetails"
              component={AccountDetails}
            />
            <AuthStack.Screen name="Coin" component={Coin} />
            <AuthStack.Screen name="MarketCoinBuy" component={MarketCoinBuy} />
            <AuthStack.Screen name="ForgetPasswordTwo" component={ForgetPasswordTwo} />
            <AuthStack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
            />
            <AuthStack.Screen name="Confirmation" component={Confirmation} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </MyContext.Provider>
  );
};
