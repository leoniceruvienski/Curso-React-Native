import React, { Component} from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

import Pessoas from './src/Pessoas';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Leonice', idade: '30', email: 'leonice@ruvienski.com'},
        {id:'2', nome: 'Ronaldo', idade: '32', email: 'ronaldo@ronaldo.com'},
        {id: '3', nome: 'Julia', idade: '18', email: ' julia@julia.com'},
        {id: '4', nome: 'Camila', idade: '45', email: ' camila@camila.com'},
        {id: '5', nome: 'José', idade: '57', email: ' jose@jose.com'},
      ]
    };
  }
  render(){
    return(
    <View style={styles.container}>

      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoas data={item} /> }
      />

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
 
});

export default App;


