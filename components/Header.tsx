import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.texto}>Meu Aplicativo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0CC0DF',
    padding: 20,
    alignItems: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
});