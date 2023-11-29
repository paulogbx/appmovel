import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AtualizaProdutos from './components/AtualizaProdutos';
import Home from './components/Home';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
          title: 'App Anotações',
          headerStyle: {
            backgroundColor: '#A9A9A9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Atualizar" component={AtualizaProdutos}
        options={{
          title: 'App Anotações',
          headerStyle: {
            backgroundColor: '#ff5252',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}