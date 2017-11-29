import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLICE_DATA = [
  { text: 'Welcome to my App', color: '#03A9F4' },
  { text: 'Be always a step ahead', color: '#009688' },
  { text: 'Get to know them before you visit them', color: '#03A9F4' },
  { text: "Let's meet them!!", color: '#009688' }
]
class WelcomeScreen extends Component {
  state = { token: null }
  
  async componentWillMount() {
    // AsyncStorage.removeItem('fb_token')
    let token = await AsyncStorage.getItem('fb_token')
    if(token) {
      this.props.navigation.navigate('allFamilies')
      this.setState({ token})
    } else {
      this.setState({ token: false })
    }
  }
  
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }
  
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    
    return (
      <Slides data={SLICE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}

export default WelcomeScreen;