import React from 'react';
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const f = () => {
    const onPress = () => {
        Alert.alert("hi thor", "hi thor, hey, hello", [
            { 
                text: "don't scremming",
                onPress: console.log('scremming')
            },
            { 
                text: "cancel",
                onPress: console.log('cancel')
            },
            { 
                text: "ok",
                onPress: console.log('ok')
            }
        ])
    }
    return (
        <View>
            <Image style={{ height: 60, width: 100, opacity: 2, backgroundColor:"gray", }} source={require('../../assets/adaptive-icon.png')}/>
            <View style={styles.container}>
            <ImageBackground
            style={{ height:670, width: 360}}
            source={{uri:'https://i.ibb.co/74TRbTh/avengers-infinity-war-thor-ragnarok-movies-marvel-cinematic-universe-wallpaper-preview.jpg'}}
            >
                
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
            </View>
            <Button title="Hi Thor" color="orange" style={styles.btn}/>
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>title</Text>
  </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    },
    btn: {
        
    },
    btnContainer: {
flex: 1,
justifyContent: "center",
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 100, 
        alignItems: "center"     
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });
export default f;