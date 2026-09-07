import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Currency = ({ currency, isUsed }) => (
  <View style={styles.currencyContainer}>
    <Text style={styles.currency}>{currency}</Text>
    <Text style={[styles.status, isUsed ? styles.used : styles.notUsed]}>
      {isUsed ? 'Used in this country' : 'Not used in this country'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  currencyContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  currency: {
    fontSize: 22,
  },
  status: {
    fontSize: 16,
    marginTop: 4,
  },
  used: {
    color: '#2E7D32',
  },
  notUsed: {
    color: '#C62828',
  },
});

export default Currency;
