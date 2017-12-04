import React, { Component } from 'react';
import { ActivityIndicator,
  FlatList, 
  StyleSheet, 
  View, 
  Text
  } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

class AllFamiliesScreen extends Component {
  // state = 
  //     {
  //         husband_name: '',
  //         husband_birthday: '',
  //         husband_POB: '',
  //         husband_image: '',
  //         wife_name: '',
  //         wife_birthday: '',
  //         wife_POB: '',
  //         wife_image: '',
  //         kid1_name: '',
  //         kid1_birthday: '',
  //         kid1_POB: '',
  //         kid1_image: '',
  //         kid2_name: '',
  //         kid2_birthday: '',
  //         kid2_POB: '',
  //         kid2_image: '',
  //         kid3_name: '',
  //         kid3_birthday: '',
  //         kid3_POB: '',
  //         kid3_image: '',
  //         kid4_name: '',
  //         kid4_birthday: '',
  //         kid4_POB: '',
  //         kid4_image: ''
  //       }
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
  
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };
  
  render() {    
    return (
      <View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.husband_name}`}
                avatar={{ uri: item.husband_image}}
                containerStyle={{ borderBottomWidth: 0 }}
                onPress={() => this.getFamily(item)}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}

          />
        </List>
      </View>
    );
  }
            
    getFamily(item){
      console.log(item);

      this.props.navigation.navigate('family', { family: item });
        
    }
            
}
        
const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5ECEE'
  }
})        

        export default AllFamiliesScreen;