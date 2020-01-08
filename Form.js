import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';


const Form = (props) => {

  const { handleSubmit } = props;

  const onSubmit = (values) => console.log(values);

  const renderInput = ({ input: { onChange, ...rest }}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...rest} />
  };

  return (
    <View style={styles.root}>
      <Field
        name={'email'}
        component={renderInput}
      />
      <Field
        name={'password'}
        component={renderInput}
        secureTextEntry
      />
      <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
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

export default reduxForm('test-form')(Form);
