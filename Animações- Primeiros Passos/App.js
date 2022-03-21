import React, { Component} from 'react';
import { StyleSheet, Text, View, Animated} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={

      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50)
    };

    Animated.timing(
      this.state.AltAnimada, 
      {
        toValue: 300,
        duration: 2000
      }
    ).start();
  }

  render() {
    return(
      <View style={styles.container}>

        <Animated.View style={{width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#4169e1', justifyContent: 'center'}}>
          
          <Text style={{color: '#fff', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>

        </Animated.View>

      </View>
    );
  } 
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
