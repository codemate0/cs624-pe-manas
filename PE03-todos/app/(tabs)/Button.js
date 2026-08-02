import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const Button = ({submitTodo}) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor="#efefef"
    onPress={submitTodo}>
    <Text style={styles.submit}>Submit</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});

export default Button;