import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

class AddCountry extends React.Component {
  state = {
    country: '',
    currency: '',
    isUsed: true,
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  toggleUsed = () => {
    this.setState((prevState) => ({ isUsed: !prevState.isUsed }));
  };

  submit = () => {
    const { country, currency, isUsed } = this.state;
    if (country === '' || currency === '') {
      alert('please complete form');
      return;
    }
    const newCountry = {
      country,
      currency,
      isUsed,
      id: uuid.v4(),
    };
    this.props.addCountry(newCountry);
    this.setState(
      {
        country: '',
        currency: '',
        isUsed: true,
      },
      () => {
        this.props.navigation.navigate('Countries');
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TextInput
          placeholder="Currency"
          onChangeText={(val) => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />
        <TouchableOpacity onPress={this.toggleUsed}>
          <View style={styles.toggle}>
            <Text style={styles.toggleText}>
              {this.state.isUsed ? 'Currency used in country' : 'Currency not used in country'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  toggle: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  toggleText: {
    color: colors.primary,
    fontSize: 16,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
});

export default AddCountry;
