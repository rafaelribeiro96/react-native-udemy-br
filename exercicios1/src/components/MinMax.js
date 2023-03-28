import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({min, max}) => {
  return (
    <Text style={Estilo.txtG}>
      O valor {max} é maior que o valor {min}
    </Text>
  );
};
