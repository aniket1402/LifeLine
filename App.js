import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { StyleSheet, Text, View } from 'react-native';
import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import LoggedInTabNavigator from './src/navigators/LoggedInTabNavigator';
import Home from './src/screens/Home';
import Fog from './src/screens/Fog';
import Help from './src/screens/Help';
import Emergency from './src/screens/Emergency';
import Metrics from './src/screens/Metrics';
import PhoneCall from './src/screens/PhoneCall';

// export default class App extends Component{
//   render() {
//     return <LoggedInTabNavigator/>
//   }
// }

console.disableYellowBox = true;
const navigator = createStackNavigator(
  {
    LoggedOut: {
      screen: LoggedOut,
      navigationOptions: {
        headerTransparent: {
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
        }
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTransparent: {
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0
        },
        headerTitleStyle: {
          // fontFamily: "my-custom-font",
          // fontWeight: "200",
          fontSize: 25,
        }
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerTransparent: {
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
        }
      }
    },
    LoggedInTabNavigator: {screen: LoggedInTabNavigator},
  },
  {
    initialRouteName: 'LoggedOut',
    defaultNavigationOptions: {
      title: 'LIFELINE',
      headerTitleStyle: {
        // fontFamily: "my-custom-font",
        // fontWeight: "200",
        fontSize: 25,
      }
    },
  },
);

export default createAppContainer(navigator);