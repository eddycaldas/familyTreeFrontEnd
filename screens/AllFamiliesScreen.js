import React, { Component } from 'react';
import { ActivityIndicator,
  FlatList, 
  StyleSheet, 
  View, 
  Text,
  Alert
  } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Swipeout from 'react-native-swipeout'

class AllFamiliesScreen extends Component {
  constructor(props){
    super(props)
    state = {
      data: [],
    },
    this.state = {
      activeRowKey: null
    },
    this.state = ({
      deletedRowKey: null,
    });
  }
    // state = {
    //   data: [],
    // }
  
  componentWillMount() {
    this.fetchData();
  }
  
  fetchData = async () => {
    const response = await fetch('https://familytreebackend1.herokuapp.com/family')
    const json = await response.json();
    this.setState({data: json})
  }
  
  componentDidMount(){
    this.refreshDataFromServer();
  }
  refreshDataFromServer = () => {
    this.setState({ refreshing: true });
    
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

  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey
      };
    });
  }

  render() {    
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if(this.setState.activeRowKey != null) {
        this.setState({ activeRowKey: null });
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.id });
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you sure you want to delete?',
              [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'yes', onPress: ()=> {
                  data.splice(this.props.id: 1);
                  this.props.parentFlatList.refreshFlatList(deletingRow);
                }},
              ],
              { cancelable: true }
            )
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.item,
      sectionId: 1
    };
    
    return (
      <View style={{backgroundColor: '#fff'}}>

        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Swipeout {...swipeSettings}>
                <ListItem
                  style={styles.listItems}
                  key={item.husband_name}
                  roundAvatar
                  title={`${item.husband_name}`}
                  avatar={{ uri: item.husband_image}}
                  containerStyle={{ borderBottomWidth: 0 }}
                  onPress={() => this.getFamily(item)}
                  parentFlatList={this}
                />
                </Swipeout>
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
      this.props.navigation.navigate('family', { family: item });
    }
}
        
const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listItems: {
    backgroundColor: 'white',
    color: 'white'
  }
})        

        export default AllFamiliesScreen;