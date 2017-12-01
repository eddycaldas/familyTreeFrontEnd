import React, { Component } from 'react';
import { ActivityIndicator,
  FlatList, 
  StyleSheet, 
  View, 
  Text
  } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { Swipeout } from 'react-native-swipeout';
import FamilyScreen from './FamilyScreen';

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

  renderHeader = () => {
    return <SearchBar placeholder="Search" lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={{paddingVertical: 20, borderTopWidth: 1, borderTopColor: 'CED0CE'}}>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  render() {
    // console.log(this.state.item);
    return (
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.husband_name}`}
              avatar={{ uri: item.husband_image }}
              button onPress={() => {('FamilyScreen')}}

            />

          )}
          keyExtractor={item => item.id}

        />
      </List>
    )
  }
}


{/* <ListItem button onPress={() => {goToView2(guest)}} */}
      // <View>
      //   <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
      //     <FlatList
      //       data={this.state.data}
      //       renderItem={({ item }) => (
      //         <ListItem
      //           roundAvatar
      //           title={`${item.husband_name}`}
      //           avatar={{ uri: item.husband_image}}
      //           containerStyle={{ borderBottomWidth: 0 }}
      //         />
      //       )}
      //       keyExtractor={item => item.id}
      //       ItemSeparatorComponent={this.renderSeparator}
      //       // ListHeaderComponent={this.renderHeader}
      //       ListFooterComponent={this.renderFooter}
      //     />
      //   </List>
      // </View>
      //         );
      //       }
      //     }
        
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