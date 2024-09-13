import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>bluesky</Text>
      </View>
      <View style={styles.box2}>
        <Text>library</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  box1: {
    width: 100,
    height: 100,
    borderWidth:2,
    borderColor:'blue',
    borderRadius:50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  box2: {
    width: 100,
    height: 100,
    borderWidth:2,
    borderColor:'purple',
    borderRadius:50,
    backgroundColor: 'lightcoral',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});


