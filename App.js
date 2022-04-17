import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "",
      name: "Jhon Doe"
  };
  this.handleChange = this.handleChange.bind(this);
}

  onPress = () => {
    console.log("current ==> ", this.state);
    this.setState(
      {
        name: this.state.text
      }
    );
  };

  handleChange = typedText => {
    console.log("update => ", typedText);
    this.setState(
      {
        text: typedText
      }
    );
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, padding: 20, color: 'black'}}>Qual é o seu nome?</Text>
        <View>
          <TextInput 
           placeholder='Jhon Doe'
           onChangeText={this.handleChange}
           style={styles.input}
          />
        </View>
        <Button onPress={this.onPress} title="Diga Olá!" style={{backgroundColor: 'dodgerblue', borderRadius: 4}}></Button>
        <Text> </Text>
        <Text style={{ fontSize: 20, marginBottom: -20, color: 'dodgerblue'}}>Olá {this.state.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    borderRadius: 4,
    margin: 10,
    width: 200
  }
});
