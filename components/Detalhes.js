// Importe as bibliotecas necessárias
import React from 'react';
import { View, Text } from 'react-native';

// Crie a tela de detalhes
const DetalhesScreen = ({ route }) => {
  const { id, tituloAtual, descricaoAtual } = route.params;

  return (
    <View>
      <Text>Título: {tituloAtual}</Text>
      <Text>Descrição: {descricaoAtual}</Text>
    </View>
  );
};

export default DetalhesScreen;
