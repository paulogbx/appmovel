import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ref, update } from 'firebase/database';
import { db } from '../src/firebaseConect';

export default function EditarAnotacao({ route, navigation }) {
  const { id, tituloAtual, descricaoAtual } = route.params;
  const [novoTitulo, setNovoTitulo] = useState(tituloAtual);
  const [novoDescricao, setNovoDescricao] = useState(descricaoAtual);

  const editarAnotacao = () => {
    const anotacoesRef = ref(db, `anotacoes/${id}`);
    update(anotacoesRef, {
      titulo: novoTitulo,
      descricao: novoDescricao,
    });
    navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput
        placeholder="Novo Título da Anotação"
        value={novoTitulo}
        onChangeText={(text) => setNovoTitulo(text)}
      />
      <TextInput
        placeholder="Nova Descrição da Anotação"
        value={novoDescricao}
        onChangeText={(text) => setNovoDescricao(text)}
      />
      <Button title="Atualizar Anotação" onPress={editarAnotacao} color="#696969" />
    </View>
  );
}
