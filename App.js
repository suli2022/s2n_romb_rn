import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [side, setSide] = React.useState('');
  const [alpha, setAlpha] = React.useState('');
  const [area, setArea] = React.useState('');
  function calcButton() {
    let rad = alpha * Math.PI / 180;
    let result = Math.pow(side, 2) * Math.sin(rad);
    setArea(result);
  }
  return (
    <View style={styles.container}>
      <Text>Rombusz területszámítása</Text>
      <Text>Feladat 0310</Text>
      <Text>Oldal hossza</Text>
      <TextInput 
      onChangeText={res => setSide(res)}
      style={styles.input} 
      />

      <Text>Alfa szög</Text>
      <TextInput 
      onChangeText={res => setAlpha(res) }
      style={styles.input} 
      />

      <TouchableHighlight
          style={styles.calcButton}
          onPress={calcButton}
          >
          <Text style={styles.calcButtonText}>Számít</Text>
      </TouchableHighlight>    

      <Text>Terület</Text>
      <TextInput 
      onChangeText={res => setArea(res) }
      style={styles.input} 
      value={area}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 30,
  },
  calcButton: {
    backgroundColor: 'blue',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
  },
  calcButtonText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  }  
});
