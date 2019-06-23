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


const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn } ,
  SiginUp: { screen: SiginUp } ,
  Home: { screen: Home } ,
   
  }, { headerMode: 'none' }, {
    initialRouteName: 'Loading'
  });

export default AppNavigator;
