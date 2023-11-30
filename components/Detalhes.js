import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { ref, update } from 'firebase/database';
import { db } from '../src/firebaseConect';

export default function DetalhesScreen({route, navigation}) {
    const {id, tituloAtual, descricaoAtual} = route.params;
    const [titulo] = useState(tituloAtual);
    const [description] = useState(descricaoAtual)

  const noteDetails = () => {
      const notesRef = ref(db, `anotacoes/${id}`);

    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Titulo da anotação: {titulo}</Text>
      <Text>Descrição da anotação: {description}</Text>
      <Button title="Retornar ao início" onPress={noteDetails}color="#696969" />
    </View>
  );
}