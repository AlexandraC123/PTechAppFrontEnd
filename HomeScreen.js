import React from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Image
        source={require('./assets/ptechlogo.jpeg')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to the PTech App!</Text>

      <Text style={styles.instructions}>Instructions:</Text>
      
      <Text style={styles.instructionStep}>
        1. Begin by downloading the P-tech app on your mobile device. Sign up for an account so that you can track your health progress over time!
      </Text>
      
      <Text style={styles.instructionStep}>
        2. Gather the following given materials: reusable test tube, disposable calibration charts, & test strips.
      </Text>
      
      <Text style={styles.instructionStep}>
        3. Before collecting your urine sample, please wash your hands thoroughly!
      </Text>
      
      <Text style={styles.instructionStep}>
        4. Collect about 50 mL of your urine sample in the test tube!
      </Text>
      
      <Text style={styles.instructionStep}>
        5. Have a timer ready for 1 minute. Place your test strip in the test tube filled with your urine sample until the time is up and then remove it!
      </Text>
      
      <Text style={styles.instructionStep}>
        6. Place the test strip within the red box along the left side of the calibration chart. Place the test strip so that the part of the test strip with extra white space is at the bottom of the red box.
      </Text>
      
      <Text style={styles.instructionStep}>
        7. Go to the P-Tech app on your mobile device and scan the strip alongside the calibration chart. For best results make sure your camera is parallel to the surface that your calibration chart and test strip is laying flat on. Do not tilt or hold your phone at an angle.
      </Text>
      
      <Text style={styles.instructionStep}>
        8. Receive your results, note your diet, and track your progress over time!
      </Text>
      
      <Text style={styles.instructionStep}>
        9. Dispose of the urine sample and thoroughly rinse out the urine collection cup and test tube. Repeat as often as required for your health!
      </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffacd',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 60,
    alignSelf: 'center',
 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionStep: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
