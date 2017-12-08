import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight,
  StyleSheet,
  Platform,
  ScrollView,
  AlertIOS
  } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class AddFamilyScreen extends Component {
  constructor(){
    super()
    this.state = {
      husband_name: '',
      husband_POB: '',
      husband_image: '',
      wife_name: '',
      wife_POB: '',
      wife_image: '',
      kid1_name: '',
      kid1_POB: '',
      kid1_image: '',
      kid2_name: '',
      kid2_POB: '',
      kid2_image: '',
      kid3_name: '',
      kid3_POB: '',
      kid3_image: '',
      kid4_name: '',
      kid4_POB: '',
      kid4_image: ''
    }
  }

  changeHusbandName(husband_name){
    this.setState({husband_name})
  }
  changeHusbandPOB(husband_POB){
    this.setState({husband_POB})
  }
  changeHusbandImage(husband_image){
    this.setState({husband_image})
  }
  
  changeWifeName(wife_name){
    this.setState({wife_name})
  }
  changeWifePOB(wife_POB){
    this.setState({wife_POB})
  }
  changeWifeImage(wife_image){
    this.setState({wife_image})
  }
  
  changeKid1Name(kid1_name){
    this.setState({kid1_name})
  }
  changeKid1POB(kid1_POB){
    this.setState({kid1_POB})
  }
  changeKid1Image(kid1_image){
    this.setState({kid1_image})
  }
  
  changeKid2Name(kid2_name){
    this.setState({kid2_name})
  }
  changeKid2POB(kid2_POB){
    this.setState({kid2_POB})
  }
  changeKid2Image(kid2_image){
    this.setState({kid2_image})
  }
  
  changeKid3Name(kid3_name){
    this.setState({kid3_name})
  }
  changeKid3POB(kid3_POB){
    this.setState({kid3_POB})
  }
  changeKid3Image(kid3_image){
    this.setState({kid3_image})
  }
  
  changeKid4Name(kid4_name){
    this.setState({kid4_name})
  }
  changeKid4POB(kid4_POB){
    this.setState({kid4_POB})
  }
  changeKid4Image(kid4_image){
    this.setState({kid4_image})
  }
  
  static navigationOptions = ({ navigation }) => {
   return {
       title: 'Add Family',
       headerRight: (
           <Button 
             title='Remove' 
             onPress={() => navigation.navigate('allFamilies')} 
             backgroundColor='rgba(0,0,0,0)'
             color='rgba(0,122,255,1)'
           />
         ),
         style: {
           marginTop: Platform.OS === 'android' ? 24 : 0
         }
       };
   }
  
   // onPressButtonPOST() {
   //   fetch('https://familytreebackend1.herokuapp.com/family', {"method": "POST", body: JSON.stringify({
   //           husband_name: '',
   //           husband_POB: '',
   //           husband_image: '',
   //           wife_name: '',
   //           wife_POB: '',
   //           wife_image: '',
   //           kid1_name: '',
   //           kid1_POB: '',
   //           kid1_image: '',
   //           kid2_name: '',
   //           kid2_POB: '',
   //           kid2_image: '',
   //           kid3_name: '',
   //           kid3_POB: '',
   //           kid3_image: '',
   //           kid4_name: '',
   //           kid4_POB: '',
   //           kid4_image: ''
   //   })})
   //   .then((response) => response.json())
   //   .then((responseData) => {
   //     AlertIOS.alert(
   //       "POST Response",
   //       "Response Body -> " + JSON.stringify(responseData.body)
   //     );
   //   })
   //   .done();
   // }
  
  buttonPressed(){
    console.log(this.state.husband_name)
    console.log(this.state.husband_POB)
    console.log(this.state.husband_Image)

    fetch('https:familytreebackend1.herokuapp.com/family', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
                  husband_name: '',
                  husband_POB: '',
                  husband_image: '',
                  wife_name: '',
                  wife_POB: '',
                  wife_image: '',
                  kid1_name: '',
                  kid1_POB: '',
                  kid1_image: '',
                  kid2_name: '',
                  kid2_POB: '',
                  kid2_image: '',
                  kid3_name: '',
                  kid3_POB: '',
                  kid3_image: '',
                  kid4_name: '',
                  kid4_POB: '',
                  kid4_image: ''
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
        "Family Added",
        "Response Body -> " + JSON.stringify(responseData.body)
      )
    })
    .done();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView>
            <TextInput 
              style={styles.input}
              placeholder='Person 1 Name'
              value={this.state.husband_name}
              onChangeText={(husband_name) => this.changeHusbandName(husband_name)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 1 Place Of Birth'
              value={this.state.husband_POB}
              onChangeText={(husband_POB) => this.changeHusbandPOB(husband_POB)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 1 image'
              value={this.state.husband_image}
              onChangeText={(husband_image) => this.changeHusbandImage(husband_image)}
            />

            <TextInput 
              style={styles.input}
              placeholder='Person 2 Name'
              value={this.state.wife_name}
              onChangeText={(wife_name) => this.changeWifeName(wife_name)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 2 Place Of Birth'
              value={this.state.wife_POB}
              onChangeText={(wife_POB) => this.changeWifePOB(wife_POB)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 2 Image'
              value={this.state.wife_image}
              onChangeText={(wife_image) => this.changeWifeImage(wife_image)}
            />

            <TextInput 
              style={styles.input}
              placeholder='Person 3 Name'
              value={this.state.kid1_name}
              onChangeText={(kid1_name) => this.changeKid1Name(kid1_name)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 3 Place Of Birth'
              value={this.state.kid1_POB}
              onChangeText={(kid1_POB) => this.changeKid1POB(kid1_POB)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 3 Image'
              value={this.state.kid1_image}
              onChangeText={(kid1_image) => this.changeKid1Image(kid1_image)}
            />

            <TextInput 
              style={styles.input}
              placeholder='Person 4 Name'
              value={this.state.kid2_name}
              onChangeText={(kid2_name) => this.changeKid2Name(kid2_name)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 4 Place Of Birth'
              value={this.state.kid2_POB}
              onChangeText={(kid2_POB) => this.changeKid2POB(kid2_POB)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 4 Image'
              value={this.state.kid2_image}
              onChangeText={(kid2_image) => this.changeKid2Image(kid2_image)}
            />

            <TextInput 
              style={styles.input}
              placeholder='Person 5 Name'
              value={this.state.kid3_name}
              onChangeText={(kid3_name) => this.changeKid3Name(kid3_name)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 5 Place Of Birth'
              value={this.state.kid3_POB}
              onChangeText={(kid3_POB) => this.changeKid3POB(kid3_POB)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 5 Image'
              value={this.state.kid3_image}
              onChangeText={(kid3_image) => this.changeKid3Image(kid3_image)}
            />

            <TextInput 
              style={styles.input}
              placeholder='Person 6 Name'
              value={this.state.kid4_name}
              onChangeText={(kid4_name) => this.changeKid4Name(kid4_name)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 6 Place Of Birth'
              value={this.state.kid4_POB}
              onChangeText={(kid4_POB) => this.changeKid4POB(kid4_POB)}
            />
            <TextInput 
              style={styles.input}
              placeholder='Person 6 Image'
              value={this.state.kid4_image}
              onChangeText={(kid4_image) => this.changeKid4Image(kid4_image)}
            />

            <TouchableHighlight
              style={styles.button}
              onPress={() => this.buttonPressed()}
              // onPress={() => this.goToAllFamilies()}
            >
              <Text style={styles.textButton}>Add</Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
    );
  }
  
  goToAllFamilies(){
    this.props.navigation.navigate('allFamilies')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 45,
    paddingRight: 45,
    // marginTop: 30
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
  input: {
    height: 35,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 5
  }
})

export default AddFamilyScreen;

// husband_name: this.state.husband_name,
// husband_POB: this.state.husband_POB,
// husband_image: this.state.husband_image,
// wife_name: this.state.wife_name,
// wife_POB: this.state.wife_POB,
// wife_image: this.state.wife_image,
// kid1_name: this.state.kid1_name,
// kid1_POB: this.state.kid1_POB,
// kid1_image: this.state.kid1_image,
// kid2_name: this.state.kid2_name,
// kid2_POB: this.state.kid2_POB,
// kid2_image: this.state.kid2_image,
// kid3_name: this.state.kid3_name,
// kid3_POB: this.state.kid3_POB,
// kid3_image: this.state.kid3_image,
// kid4_name: this.state.kid4_name,
// kid4_POB: this.state.kid4_POB,
// kid4_image:this.state.kid4_image,