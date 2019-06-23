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


const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn } ,
   
  }, { headerMode: 'none' }, {
    initialRouteName: 'Loading'
  });

export default AppNavigator;
