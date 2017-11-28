import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

class AllFamiliesScreen extends Component {
  state = {
    data: []
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
      <View style={styles.container}>
        <FlatList data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => 
            <Text>{`${item.husband_name} ${item.wife_name}`}
            </Text>}

        />
      </View>
        )
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