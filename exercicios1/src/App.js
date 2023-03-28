import React from 'react';
import {View, StyleSheet} from 'react-native';
import Contador from './components/Contador';

//import Botao from './components/Botao';
//import Title from './components/title';
//import CompPadrao, {Comp1, Comp2} from './components/Multi';
//import Primeiro from './components/Primeiro';
//import MinMax from './components/MinMax';
//import NumAleatorio from './components/NumAleatorio';

function App() {
  return (
    <View style={style.App}>
      <Contador inicial={100} modifica={5} />
      <Contador />
      {/*
      <Botao />
      <Title
        principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto"
      />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      <MinMax min={3} max={20} />
      <NumAleatorio num1={1} num2={1000} /> */}
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
