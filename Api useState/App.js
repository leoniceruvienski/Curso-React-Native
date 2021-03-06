import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function App(){

  const [nome, setNome] = useState('Leonice');
  const [input, setInput] = useState('');

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  return(
    <View style={styles.container}>

      <TextInput
      placeholder= " Seu nome..."
      value={input}
      onChangeText={(texto) => setInput(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}> {nome} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15
  },
  texto:{
    color: '#000',
    fontSize: 35
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText:{
    color: '#fff'
  }
});
//teste

