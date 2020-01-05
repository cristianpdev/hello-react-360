import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export class hello_react_360 extends React.Component {

  state = {
    name: 'Hello World!',
  }

  changeValueButton = () => {
    if(this.state.name == 'Hello World!'){
      this.setState({name: 'Olá Mundo!'});
    }else{
      this.setState({name: 'Hello World!'})
    }
    
  }
  render() {
    return (
      <View style={styles.panel}>
        <VrButton style={styles.button} onClick={this.changeValueButton}>
          <Text style={styles.text}>{this.state.name}</Text>
        </VrButton>
      </View>
      
           
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 700,
    height: 700,
    backgroundColor: '#A020F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
  },
  button: {
    backgroundColor: '#00FF7F',
    borderRadius: 5,
    width: 110,
    height: 44,
    borderColor: '#000000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    shadowColor: '#000000',
  }
});

AppRegistry.registerComponent('hello_react_360', () => hello_react_360);

