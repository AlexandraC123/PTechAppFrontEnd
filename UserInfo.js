import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';



export default function UserInfo() {  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedSex, setSelectedSex] = useState(null);
  
  const navigation = useNavigation();

  const handleSave = () => {
    navigation.navigate('Home');
  }
  

  const styles = StyleSheet.create({
    container: {
      flex:   1,
      backgroundColor: '#fffacd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height:   40,
      width:   200,
      margin:   12,
      borderWidth:   1,
      borderRadius:   10,
      padding:   10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width:   0,
        height:   2,
      },
      shadowOpacity:   0.25,
      shadowRadius:   3.84,
      elevation:   5,
    },
    label: {
      marginTop:   10,
      fontSize:   16,
      fontWeight: 'bold',
      color: '#841584',
    },
    sexButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop:   10,
    },
    buttonContainer: {
      backgroundColor: '#fff',
      borderRadius:   10,
      padding:   10,
      shadowColor: '#000',
      shadowOffset: {
        width:   0,
        height:   2,
      },
      shadowOpacity:   0.25,
      shadowRadius:   3.84,
      elevation:   5,
      margin:   5,
    },
  });

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
    >
    
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setAge}
        value={age}
        placeholder="Age"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="Height (in)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Weight (lbs)"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Select Your Sex</Text>
      <View style={styles.sexButtonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="M"
            onPress={() => setSelectedSex('M')}
            color={selectedSex === 'M' ? "#841584" : "#fff"}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="F"
            onPress={() => setSelectedSex('F')}
            color={selectedSex === 'F' ? "#841584" : "#fff"} 
          />
        </View>
      </View>
      <Button
        title="Save"
        onPress={handleSave}
      />
    </View>
    </KeyboardAvoidingView>

  );
}