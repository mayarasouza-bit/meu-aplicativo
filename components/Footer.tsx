import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texto}>© 2026 Meu Aplicativo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0CC0DF',
    padding: 15,
    alignItems: 'center'
  },
  texto: {
    color: '#fff'
  }
});