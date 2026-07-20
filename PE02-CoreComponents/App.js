import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [favorite, setFavorite] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development I',
    'CS 628 Full-Stack Development II',
  ];

  const capstoneCourses = [
    'CS 687 Computer Science Capstone',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />

      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favorite}
        onChangeText={setFavorite}
      />

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
        {coreCourses.map((course, i) => (
          <Text key={i} style={styles.course}>{course}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
        {depthCourses.map((course, i) => (
          <Text key={i} style={styles.course}>{course}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Capstone (3 Credits)</Text>
        {capstoneCourses.map((course, i) => (
          <Text key={i} style={styles.course}>{course}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  icon: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
    marginBottom: 8,
  },
  course: {
    fontSize: 15,
    paddingVertical: 2,
    color: '#000',
  },
});

export default App;