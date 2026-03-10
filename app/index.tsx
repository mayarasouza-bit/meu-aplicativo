import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Botao from '../components/Botao';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <View style={styles.container}>

      <Header />

      <Botao titulo="Entrar" />
      <Botao titulo="Cadastrar" />

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  }
});