import React, { Component} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={

      LarAnimada: new Animated.Value(0)
      
    };

    Animated.timing(
      this.state.LarAnimada,
      {
        toValue: 100,
        duration: 3000
      }
    )
      
  }
  
  render() {

    let porcentagemAnimada = this.state.LarAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    });

    return(
      <View style={styles.container}>

        <Animated.View style={{backgroundColor: '#4169e1', width: porcentagemAnimada, height: 25}}>

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
  },

});
//tester
