import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class AddFamilyScreen extends Component {
  static navigationOptions = ({ navigation }) => {
   return {
       title: 'Add Family',
       headerRight: (
           <Button 
             title='Remove' 
             onPress={() => navigation.navigate('removeFamily')} 
             backgroundColor='rgba(0,0,0,0)'
             color='rgba(0,122,255,1)'
           />
         ),
         style: {
           marginTop: Platform.OS === 'android' ? 24 : 0
         }
       };
   }
  
  
  render() {
    return (
      <View>
        <Text>AddFamilyScreen</Text>
        <Text>AddFamilyScreen</Text>
        <Text>AddFamilyScreen</Text>
        <Text>AddFamilyScreen</Text>
      </View>
    )
  }
}

export default AddFamilyScreen;