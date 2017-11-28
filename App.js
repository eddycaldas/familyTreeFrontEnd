import Expo from 'expo'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AllFamiliesScreen from './screens/AllFamiliesScreen';
import FamilyScreen from './screens/FamilyScreen';
import RemoveFamilyScreen from './screens/RemoveFamilyScreen';
import AddFamilyScreen from './screens/AddFamilyScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          allFamilies: { screen: AllFamiliesScreen },
          family: { screen: FamilyScreen },
          review: {
            screen: StackNavigator({
              addFamily: { screen: AddFamilyScreen },
              removeFamily: { screen: RemoveFamilyScreen }
            })
          }
        })
      }
    })
    
    
    return (
        <MainNavigator />




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
