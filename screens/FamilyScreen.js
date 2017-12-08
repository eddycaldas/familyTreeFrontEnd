import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  Image,
  Dimensions,
  Parallax,
  ScrollView
} from 'react-native';
import AllFamiliesScreen from './AllFamiliesScreen';

// var Parallax = require('react-native-parallax');

const {width, height} = Dimensions.get('window');

class FamilyScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {family} = this.props.navigation.state.params
    // console.log(family);
    return (<ScrollView style={styles.aWholeView} key={family.id}>
      <View style={styles.view} key={family.husband_name}>
        <Image style={styles.image} source={{uri: family.husband_image}}/>
        <Text>{family.husband_name}</Text>
        <Text>{family.husband_POB}</Text>
      </View>

      <View style={styles.view} key={family.wife_name}>
        <Image style={styles.image} source={{uri: family.wife_image}}/>
        <Text>{family.wife_name}</Text>
        <Text>{family.wife_POB}</Text>
      </View>

      <View style={styles.view} key={family.kid1_name}>
        <Image style={styles.image} source={{uri: family.kid1_image}}/>
        <Text>{family.kid1_name}</Text>
        <Text>{family.kid1_POB}</Text>
      </View>

      <View style={styles.view} key={family.kid2_name}>
        <Image style={styles.image} source={{uri: family.kid2_image}}/>
        <Text>{family.kid2_name}</Text>
        <Text>{family.kid2_POB}</Text>
      </View>

      <View style={styles.view} key={family.kid3_name}>
        <Image style={styles.image} source={{uri: family.kid3_image}}/>
        <Text>{family.kid3_name}</Text>
        <Text>{family.kid3_POB}</Text>
      </View>

      <View style={styles.view} key={family.kid4_name}>
        <Image style={styles.image} source={{uri: family.kid4_image}}/>
        <Text>{family.kid4_name}</Text>
        <Text>{family.kid4_POB}</Text>
      </View>
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 340,
    height: 340
  },
  view: {
    alignItems: 'center',
    marginTop: 30
  },
  aWholeView: {
    marginTop: 30
  }
});

export default FamilyScreen;