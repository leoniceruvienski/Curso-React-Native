import React, { Component} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'Leonice'
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){ 
      this.setState({nome: 'Bem Vindo:'+ texto});
   }else{
    this.setState({nome: ''})
   }
   
  }

  render(){

    return(
    <View style={styles.container}>

      <TextInput
      style={styles.input}
      placeholder= "Digite seu Nome"
      underlineColorAndroid="transparente"
      onChangeText={this.pegaNome}
      />
      <Text style={styles.texto}>{this.state.nome}</Text>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 45,
    borderColor: 'red',
    margin: 10,
    fontSize: 30,
   
  },
  texto:
  {
    textAlign: 'center',
    fontSize: 25,
  }
});

export default App;
