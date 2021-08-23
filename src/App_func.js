import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

export default function App() {

  const [data, setState] = useState([]);

  const apiCall = async () => {
      const resp = await fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
      const respJson = await resp.json();
      setState(respJson.infectedByRegion);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}}> Lista de Vacinação function </Text>
        <FlatList 
          style={{marginBottom: 20}}
          data={data}
          renderItem={({item}) => (
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
          )}
        />
    </View>
  );
};