import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StudentProfile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../assets/student.png')} // Replace with the URL of your profile image
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Fahim Nirob</Text>

      {/* Department */}
      <Text style={styles.department}>Computer Science and Engineering</Text>

      {/* Email */}
      <Text style={styles.email}>fahim99@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'green',
  },
  department: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
    color: '#777',
  },
});

export default StudentProfile;
