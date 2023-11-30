import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AtualizaAnotacao from './components/AtualizaAnotacao';
import Home from './components/Home';
import Detalhes from './components/Detalhes';


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
        <Stack.Screen name="Atualizar" component={AtualizaAnotacao}
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
        <Stack.Screen name="Detalhes" component={Detalhes}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}