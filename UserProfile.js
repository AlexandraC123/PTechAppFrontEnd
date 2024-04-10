import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { patientInfo } = route.params;

export default function PatientProfileScreen() {
  const [patientInfo, setPatientInfo] = useState(null);


  useEffect(() => {
    const getPatientInfo = async () => {
      const storedInfo = await AsyncStorage.getItem('patientInfo');
      if (storedInfo) {
        setPatientInfo(JSON.parse(storedInfo));
      }
    };

    getPatientInfo();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Profile</Text>
      {patientInfo && (
        <>
          <Text>Name: {patientInfo.name}</Text>
          <Text>Email: {patientInfo.email}</Text>
          {/* Add more fields as needed */}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize:  24,
    fontWeight: 'bold',
  },
});