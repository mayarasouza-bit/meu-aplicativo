import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoProps {
  titulo: string;
}

export default function Botao({ titulo }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#0CC0DF',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});