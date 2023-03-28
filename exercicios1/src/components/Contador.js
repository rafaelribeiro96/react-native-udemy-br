import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, modifica = 1}) => {
  //let numero = props.inicial;
  const [numero, setNumero] = useState(inicial);

  const inc = () => setNumero(numero + modifica);
  const dec = () => setNumero(numero - modifica);

  return (
    <>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
