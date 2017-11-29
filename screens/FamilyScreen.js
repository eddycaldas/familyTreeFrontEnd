import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FamilyScreen extends Component {
  state = {
    data: [],
  };
  
  componentWillMount() {
  
    this.fetchData();
  }
  
  fetchData = async () => {
    const response = await fetch('https://familytreebackend1.herokuapp.com/family')
    const json = await response.json();
    this.setState({data: json})
  }
  
  render() {
    return (
      <View>
        
      </View>
    )
  }
}

export default FamilyScreen;