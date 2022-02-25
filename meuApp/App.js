import React, { Component} from 'react';
import { Text, View, Image } from 'react-native';

class App extends Component{
  render(){

    let nome = 'Leonice';
   

    return(
      <View>
        <Text>Boa tarde</Text>
        <Text>Meu Primeiro App</Text>
        <Text style ={{ color: 'red', fontSize: 25, margin: 15 }}>
          Sujeito Programador
        </Text>

        <Text style={{ fontSize: 30 }}> {nome} </Text>

        <Jobs largura={300} altura={300} nome="STEVE JOOBS"/>

      </View>
    );
  }
}

class Jobs extends Component{
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png'
    return(
      <View>
          <Image
           source={{ uri: img } }
           style={{ width: this.props.largura, height: this.props.altura }}
          />
          <Text>{this.props.nome}</Text>
      </View>
    
    );
  }
}

export default App;
