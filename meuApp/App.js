import React, { Component} from 'react';
import { Text, View } from 'react-native';

class App extends Component{

  render(){

    return(
      <View style={{flex:1, backgroundColor: '#ddd'}}>

        <View style={{height: 65, backgroundColor: '#222'}}>
         
        </View>

        <View style={{flex:1, backgroundColor: '#ddd'}}>
        <Text>Meu primeiro texto</Text>
        </View>

        <View style={{height:65, backgroundColor: '#222'}}></View>
       
    
      </View>
    );
  }
}

export default App;
