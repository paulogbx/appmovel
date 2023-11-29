import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ref, update } from 'firebase/database';
import { db } from '../src/firebaseConect';

export default function AtualizaAnotacaos({ route, navigation }){
    const { id, tituloAtual, descricacaoAtual } = route.params;
    const [novoTitulo, setNovoTitulo] = useState(tituloAtual);
    const [novoDescricacao, setNovoDescricacao] = useState(descricacaoAtual);
   
    const atualizarAnotacao = () => {
        const produtosRef = ref(db, 'produtos/' + id);
        update(produtosRef,{
          titulo: novoTitulo,
          descricacao: novoDescricacao,
        });
        navigation.navigate('Home');
    };
    return (
        <View>
          <TextInput
            placeholder="Novo Titulo da Anotacao"
            value={novoTitulo}
            onChangeText={(text) => setNovoTitulo(text)}
          />
          <TextInput
            placeholder="Nova Descrição da Anotacao"
            value={novoDescricacao}
            onChangeText={(text) => setNovoDescricacao(text)}
          />
          <Button title="Atualizar Anotacao" onPress={atualizarAnotacao} color="#ff5252" />
        </View>
    );
}
