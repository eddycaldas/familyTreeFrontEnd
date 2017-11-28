import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLICE_DATA = [
  { text: 'Welcome to my App', color: '#03A9F4' },
  { text: 'Be always a step ahead', color: '#009688' },
  { text: 'Get to know them before you visit them', color: '#03A9F4' },
  { text: "Let's meet them!!", color: '#009688' }
]
class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }
  
  render() {
    return (
      <Slides data={SLICE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}

export default WelcomeScreen;