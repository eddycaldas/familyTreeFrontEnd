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
    const { family } = this.props.navigation.state.params
    
    return (
      <View style={styles.container}>
        <Text>{family.husband_name}</Text>
        
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