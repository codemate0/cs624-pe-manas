import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Currency from './Currency';
import { colors } from '../theme';

export default class Country extends React.Component {
  render() {
    const { country } = this.props.route.params;
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>{country.country}</Text>
        </View>
        <Text style={styles.label}>Currency</Text>
        <Currency currency={country.currency} isUsed={country.isUsed} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 15,
    marginLeft: 10,
  },
});
