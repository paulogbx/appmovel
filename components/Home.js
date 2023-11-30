import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { onValue, push, ref, remove } from 'firebase/database';
import { db } from '../src/firebaseConect';


export default function Home({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricacao] = useState('');
  const [anotacoes, setAnotacaos] = useState([]);

  const cadastrarAnotacao = ()=>{
    if(titulo && descricao){
        const anotacoesRef = ref(db,'anotacoes');
        push(anotacoesRef,{titulo,descricao});
        
    }
    setTitulo('');
    setDescricacao('');
  }

  useEffect(()=>{
    const anotacoesRef = ref(db,'anotacoes');
    const dados = onValue(anotacoesRef,(snapshot)=>{
      const anotacoesDados = snapshot.val();
      const anotacoesVetor = [];    
      for(let id in anotacoesDados){
          anotacoesVetor.push({id, ...anotacoesDados[id]});
      }
      setAnotacaos(anotacoesVetor);
    });
    return ()=> dados();
  },[]);

  const atualizarAnotacao = (id, titulo, descricao) => {
    navigation.navigate('Atualizar', {
      id,
      tituloAtual: titulo,
      descricaoAtual: descricao,
    });
  };

  const excluirAnotacao = (id) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza que deseja excluir este produto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            const anotacoesRef = ref(db, `anotacoes/${id}`);
            remove(anotacoesRef);
            navigation.navigate('Home');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const detalhes = (id, titulo, descricao) => {
    navigation.navigate('Visualizar', {
      id,
      tituloAtual: titulo,
      descricaoAtual: descricao,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Titulo da Anotação"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput style={styles.input}
        placeholder="Descrição da Anotação"
        value={descricao}
        onChangeText={(text) => setDescricacao(text)}
      />
      <Button title="Cadastrar Anotação" onPress={cadastrarAnotacao} color="#696969"/>
     
      <FlatList
        data={anotacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.paginaDetalhe}>
            <Text style={styles.texto}> {item.titulo}</Text>
            <Ionicons name="eye-outline" size={26}
              onPress={() => detalhes(item.id)}/>
            <Ionicons name="create-outline" size={26}
              onPress={() => atualizarAnotacao(item.id, item.titulo, item.descricao)}/>
            <Ionicons name="trash-outline" size={26}
              onPress={() => excluirAnotacao(item.id)}/>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10
  },
  paginaDetalhe: {
    backgroundColor: '#FFEBCD',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    backgroundColor: '#D3D3D3',
    marginHorizontal:10,
    marginBottom:10,
    paddingLeft:8,
    borderRadius:10,
    height:30
  },
  texto:{
    fontWeight:'bold',
    color:'#5e405b'
  }
});