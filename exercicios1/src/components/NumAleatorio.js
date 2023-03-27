import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({num1, num2}) => {
  const delta = num2 - num1 + 1;
  const aleatorio = Math.floor(Math.random() * delta) + num1;
  return (
    <Text style={Estilo.fontG}>
      O numero aleatório entre {num1} e {num2} é {aleatorio}
    </Text>
  );
};
