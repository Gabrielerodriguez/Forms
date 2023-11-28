import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Oie = () => {
  return (

    <View style={styles.form}>
      <Text style={styles.texto}>Cadastro de Cliente</Text>
      <TextInput style={styles.btn} placeholder="Digite o seu nome:" />
      <TextInput style={styles.btn} placeholder="Digite o seu CPF:" />
      <TextInput style={styles.btn} placeholder="Digite o seu email:" />
      <TextInput style={styles.btn} placeholder="Digite o seu telefone de celular:" />


      <TouchableOpacity style={styles.button}>
        <Text>GRAVAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Oie; 

