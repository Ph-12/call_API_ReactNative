import React, { PureComponent } from 'react';
import {  View, Text, FlatList } from 'react-native';

export default class App extends PureComponent {
  
  constructor() {
    super();
    this.state = {
      data:[]
    };
  }

  componentDidMount(){
    this.apiCall()
  }
    async apiCall(){
      let resp = await fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
      let respJson = await resp.json()
      // console.warn(respJson)
      this.setState({data:respJson.infectedByRegion})
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 30, margin: 10}}> Lista de Vacinação Class </Text>
        <FlatList 
          style={{marginBottom: 20}}
          data={this.state.data}
          renderItem={({item}) => 
            <Text style={{
              fontSize: 20, 
              backgroundColor: 'skyblue', 
              marginHorizontal: 20, 
              marginBottom: 10, 
              textAlign: 'center', 
              borderWidth: 2 , 
              borderColor: '#000'
              }}> 
                {item.state}:         {item.count}
            </Text>
         }
        />

      </View>
    );
  }
}
