import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';

export default function App() {

  const [data, setData] = useState([]);

  const apiCall = async () => {
     try {
      const resp = await fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
      const respJson = await resp.json();
      setData(respJson.infectedByRegion);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}}> Lista de Vacinação Brasil </Text>
        <FlatList 
          style={{marginBottom: 20}}
          data={data}
          renderItem={({ item }) => (
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