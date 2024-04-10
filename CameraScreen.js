import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function CameraScreen() {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality:  1, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      const confirmation = await Alert.alert(
        'Save Picture',
        'Do you want to save this picture?',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: async () => {
            // Save the image to the device's local storage
            const newPath = FileSystem.documentDirectory + 'photo.jpg';
            await FileSystem.moveAsync({
              from: source,
              to: newPath,
            });
            setPhoto(newPath);
          }},
        ],
        { cancelable: false }
      );
    }
  };

  const retakePicture = () => {
    // Reset the photo state to trigger a retake
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.capture} onPress={takePicture}>
            <Text style={styles.text}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {photo && (
        <View style={styles.photoContainer}>
          <Image source={{ uri: photo }} style={styles.photo} />
          <TouchableOpacity style={styles.retakeButton} onPress={retakePicture}>
            <Text style={styles.text}> Take Another </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:  1,
    },
    camera: {
      flex:  1,
    },
    buttonContainer: {
      flex:  1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin:  20,
    },
    capture: {
      flex:  0,
      backgroundColor: '#fff',
      borderRadius:  5,
      padding:  15,
      paddingHorizontal:  20,
      alignSelf: 'center',
    },
    text: {
      fontSize:  14,
    },
    photoContainer: {
      flex:  1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    photo: {
      width:  300,
      height:  300,
      resizeMode: 'contain',
    },
    retakeButton: {
      marginTop:  10,
      backgroundColor: '#fff',
      borderRadius:  5,
      padding:  10,
      alignSelf: 'center',
    },
});