import React, { Component } from 'react';
import { View, 
  Text,
  StyleSheet } 
  from 'react-native';
import AllFamiliesScreen from './AllFamiliesScreen'

class FamilyScreen extends Component {
  constructor(props){
    super(props)
  }


  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>text</Text>

      </View>
    )
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
      
  export default FamilyScreen;