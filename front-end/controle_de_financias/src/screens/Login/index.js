import React from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from './styles';

function Login() {
  return (
    <View>
        <TextInput
          style={styles.inputText}
          placeholder="Insira o Login"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Insira a Senha"
        />
        <Button style={styles.buttonInput} title="Entrar" />
        <Button style={styles.buttonInput} title="Cadastrar" />
    </View>
  );
}

export default Login;