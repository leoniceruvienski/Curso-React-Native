import React, { Component} from 'react';
import { Text, View, Button} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }
  
  render(){

    return(
      <View style={{ marginTop: 20}}>
        <Button title="Entrar" onPress={ () => this.entrar('Leonice Ruvienski')}/>
        <Text style={{fontSize: 25, color: 'red', textAlign: 'center'}}>{this.state.nome}</Text>
  
      </View>
    );
  }
}

export default App;
