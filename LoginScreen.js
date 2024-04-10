import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import{ useNavigation} from '@react-navigation/native';
import UserInfo from './UserInfo';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform your login logic here
    // If login is successful, navigate to UserInfo
   
  
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('./assets/ptechlogo.jpeg')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PTech App</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <Button
            title="Login"
            onPress={handleLogin}
            color="#841584"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: '#fffacd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:  50,
  },
  titleContainer: {
    marginBottom:  20,
  },
  title: {
    fontSize:  24,
    fontWeight: 'bold',
    color: '#841584',
    textAlign: 'center',
  },
  input: {
    height:  40,
    width:  200,
    margin:  12,
    borderWidth:  1,
    borderRadius:  10,
    padding:  10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width:  0,
      height:  2,
    },
    shadowOpacity:  0.25,
    shadowRadius:  3.84,
    elevation:  5,
  },
  logo: {
    width:  120,
    height:  120,
    resizeMode: 'contain',
    marginBottom:  20,
    borderRadius:  60,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width:  0,
      height:  2,
    },
    shadowOpacity:  0.25,
    shadowRadius:  3.84,
    ...Platform.select({
      android: {
        elevation:  5,
      },
    }),
  },
  formContainer: {
    width: '80%',
    marginTop:  20,
    alignItems: 'center',
  },
});
