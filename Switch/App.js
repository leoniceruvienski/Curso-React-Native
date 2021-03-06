import React, { Component} from 'react';
import { Text, View, StyleSheet, Switch} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      status: false
    };
  }

  render(){

    return(
    <View style={styles.container}>

      <Switch
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      thumbColor="#FF0000"
      />

      <text style={{textAlign: 'center', fontSize: 30}}>
        {(this.state.status) ? "Ativo" : "Inativo"}
      </text>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

//teste

export default App;

