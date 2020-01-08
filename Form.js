import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';


const Form = (props) => {
  return (
    <View style={styles.root}>
      <TextInput
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        placeholder={'Password'}
        style={styles.input}
      />
      <Button title={'Submit'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 32,
    justifyContent: 'center'
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4
  }
});

export default Form;
