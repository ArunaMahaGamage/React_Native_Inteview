/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator } from 'react-navigation';
import SignIn from './Sigin';
import SiginUp from './Siginup';
import Home from './Home';
import ApiCall from './ApiCall';
import CListview from './CListview';
import Login from './Login';


const AppNavigator = createStackNavigator({
  Login: { screen: Login } ,
  SignIn: { screen: SignIn } ,
  SiginUp: { screen: SiginUp } ,
  Home: { screen: Home } ,
  ApiCall: { screen: ApiCall } ,
  CListview: { screen: CListview } ,
   
  }, { headerMode: 'none' }, {
    initialRouteName: 'Loading'
  });

export default AppNavigator;
