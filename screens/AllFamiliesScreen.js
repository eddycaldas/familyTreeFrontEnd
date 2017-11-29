import React, { Component } from 'react';
import { ActivityIndicator,FlatList, StyleSheet, View, Text} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Swipeout } from 'react-native-swipeout';

class AllFamiliesScreen extends Component {
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
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
              <ListItem
                roundAvatar
                avatar={{ uri: item.husband_image }}
                title={`${item.husband_name}`}
              />}
          />
        </List>
      </View>
              );
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