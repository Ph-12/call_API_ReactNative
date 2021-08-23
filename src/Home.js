import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
          <View style={{ flex:1, flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
               <View style={{ marginRight: 10 }}>
               <Button
                    title="Go to Class"
                    onPress={() => navigation.navigate('Class')}
               />
               
               </View>

                    <View style={{ marginLeft: 10}}>
                    <Button
                    title="Go to Function"
                    onPress={() => navigation.navigate('Function')}
                    />

                    </View>
          </View>
	);
   }