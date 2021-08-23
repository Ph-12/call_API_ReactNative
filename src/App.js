import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tela0 from './Home';
import Tela1 from './App_class';
import Tela2 from './App_func';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
         screenOptions={{
           headerShown: true,
           headerMode: 'float',
           headerTintColor: 'white',
           headerTitleAlign: 'center',
           headerStyle: { backgroundColor: 'skyblue', },
         }}
       >
         <Stack.Screen name="Home" component={Tela0} options={{ headerShown: false }}/>
         <Stack.Screen name="Class" component={Tela1} />
         <Stack.Screen name="Function" component={Tela2} />

       </Stack.Navigator>
    </NavigationContainer>
  );
}