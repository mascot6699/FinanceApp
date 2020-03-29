import * as React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Portfolio} from './src/screens/Portfolio';
import {Wallet} from './src/screens/Wallet';
import {Home} from './src/screens/Home';
import {Notifications} from './src/screens/Notifications';
import {More} from './src/screens/More';
import {HomeDetail} from './src/screens/HomeDetail';
import {Splash} from './src/screens/Splash';
import {Settings} from './src/screens/Settings';
import {Market} from './src/screens/Market';
import {AccountSettings} from './src/screens/AccountSettings';
import {Coin} from './src/screens/Coin';
import {MarketCoinBuy} from './src/screens/MarketCoinBuy';
import {AccountDetails} from './src/screens/AccountDetails';
import {ForgetPassword} from './src/screens/ForgetPassword';
import {ForgetPasswordTwo} from './src/screens/ForgetPasswordTwo';
import {Confirmation} from './src/screens/Confirmation';
import {Denemee} from './src/screens/Denemee';
import {Watchlist} from './src/screens/Watchlist';
import {Login} from './src/screens/Login';
import {Signup} from './src/screens/Signup';
import {Signup2} from './src/screens/Signup2';
import BackButton from './components/BackButton';
import fsManager from './fs-manager';


const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const PortfolioStack = createStackNavigator();
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
const WatchlistStack = createStackNavigator();

// const NotificationsStack = createStackNavigator();


const WatchlistStackScreen = () => (
  <WatchlistStack.Navigator>
    <WatchlistStack.Screen name={'Watchlist'} component={Watchlist} />
  </WatchlistStack.Navigator>
);

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
  <MarketStack.Navigator headerMode={'none'}>
    <MarketStack.Screen name="Market" component={Market} />
    <MarketStack.Screen name="AccountDetails" component={AccountDetails} />
  </MarketStack.Navigator>
);

const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="AccountSettings" component={AccountSettings} />
  </AccountStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingStack.Navigator headerMode={'none'}>
    <SettingStack.Screen name="Settings" component={Settings} />
    <SettingStack.Screen name="AccountSettings" component={AccountSettings} />
  </SettingStack.Navigator>
);

const WalletStackScreen = () => (
  <WalletStack.Navigator headerMode={'none'}>
    <WalletStack.Screen name="Wallet" component={Wallet} />
    <WalletStack.Screen name="Coin" component={Coin} />
    <WalletStack.Screen name="MarketCoinBuy" component={MarketCoinBuy} />
  </WalletStack.Navigator>
);

const PortfolioStackScreen = () => (
  <PortfolioStack.Navigator headerMode={'none'}>
    <PortfolioStack.Screen name="Portfolio" component={Portfolio} />
    <PortfolioStack.Screen name="HomeDetail" component={HomeDetail} />
  </PortfolioStack.Navigator>
);

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator headerMode={'none'}>
      <MoreStack.Screen name="More" component={More} />
      <MoreStack.Screen name="Settings" component={SettingsStackScreen} />
      <MoreStack.Screen name="Market" component={MarketStackScreen} />
      <MoreStack.Screen name="AccountDetails" component={AccountDetails} />
    </MoreStack.Navigator>
  );
};

const TabsScreen = () => (
  <Tab.Navigator
    headerMode={'none'}
    tabBarOptions={{showIcon: true, activeTintColor: '#000000'}}
    initialRouteName="Home">
    <Tab.Screen
      name="Portfolio"
      component={PortfolioStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('./src/assets/img/PortfolioAktif.png')
                  : require('./src/assets/img/Portfolio.png')
              }
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('./src/assets/img/WalletAktif.png')
                  : require('./src/assets/img/wallet-3-fill.png')
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
        tabBarIcon: ({focused}) =>
          focused ? (
            <View
              style={{
                width: 66,
                backgroundColor: 'white',
                borderRadius: 50,
                height: 66,
                flexDirection: 'column',
                marginTop: -5,
              }}>
              <Image
                style={{marginHorizontal: 13, marginTop: 9}}
                source={require('./src/assets/img/HomeAktif.png')}
              />
            </View>
          ) : (
            <View
              style={{
                width: 66,
                backgroundColor: 'white',
                borderRadius: 50,
                height: 66,
                flexDirection: 'column',
                marginTop: -5,
              }}>
              <Image
                style={{marginHorizontal: 13, marginTop: 9}}
                source={require('./src/assets/img/Homepasif.png')}
              />
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
                  ? require('./src/assets/img/NotificationsAktif.png')
                   : require('./src/assets/img/notifications.png')
              }
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="More"
      component={MoreStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={
                focused
                  ? require('./src/assets/img/MoreAktif.png')
                  : require('./src/assets/img/More.png')
              }
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

let isLogged; 
fsManager.getUser().then(profile => {
  isLogged = profile !== undefined;
});

const Drawer = createDrawerNavigator();
const App = () => { 
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {isLogged ? (
        <Drawer.Navigator initialRouteName={'Home'}>
          <Drawer.Screen name="Home" component={TabsScreen} />
          <Drawer.Screen name="More" component={MoreStackScreen} />
          <Drawer.Screen name="Portfolio" component={Portfolio} />
          <Drawer.Screen name="AccountSettings" component={AccountSettings} />
          <Drawer.Screen name="AccountDetails" component={AccountDetailsStackScreen} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Wallet" component={WalletStackScreen} />
          <Drawer.Screen name="Market" component={MarketStackScreen} />
          <Drawer.Screen name="Coin" component={Coin} />
          <Drawer.Screen name="MarketCoinBuy" component={MarketCoinBuyStackScreen}/>
          <Drawer.Screen name="ForgetPassword" component={ForgetPasswordStackScreen}/>
          <Drawer.Screen name="Confirmation" component={ConfirmationStackScreen}/>
        </Drawer.Navigator>
      ) : (
        <AuthStack.Navigator name={'Auth'} headerMode={'none'} initialRouteName={'Login'}>
          <AuthStack.Screen name="Home" component={TabsScreen} />
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Signup" component={Signup} />
          <AuthStack.Screen name="Signup2" component={Signup2} />
          <AuthStack.Screen name="More" component={MoreStackScreen} />
          <AuthStack.Screen name="Denemee" component={Denemee} />
          <AuthStack.Screen name="Market" component={Market} />
          <AuthStack.Screen name="Settings" component={Settings} />
          <AuthStack.Screen name="Watchlist" component={WatchlistStackScreen} />
          <AuthStack.Screen name="AccountSettings" component={AccountSettings}/>
          <AuthStack.Screen name="AccountDetails" component={AccountDetails} />
          <AuthStack.Screen name="Coin" component={Coin} />
          <AuthStack.Screen name="MarketCoinBuy" component={MarketCoinBuy} />
          <AuthStack.Screen name="ForgetPasswordTwo" component={ForgetPasswordTwo}/>
          <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
          <AuthStack.Screen name="Confirmation" component={Confirmation} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;

