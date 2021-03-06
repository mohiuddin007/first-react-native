import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({navigation}) => {

    const pressHandler =() => {
       navigation.navigate('Details')
    // navigation.push('Details')    
}
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../../assets/shanghai-5930970_1280.jpg')}
        >
            <View style={styles.logoContainer}>

            <Image
            style={styles.logo}
            source={require('../../assets/google-voxytalksy.png')}
            ></Image>
            <Text style={{color: "#fc5c65"}}>Sell what you don't need. </Text>
            <Button title="Go to details" onPress={pressHandler}/>
            </View>

         <View style={styles.loginButton}>
             <Text>Log In</Text></View>
         <View style={styles.registerButton}>
         <Text>Register</Text>
             </View>   
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
   background: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: "center"
   },
   logo: {
       width: 100, height: 100,
       backgroundColor: "gray",
    },
    logoContainer: {
       position: 'absolute',
       top: 70,
       alignItems: "center"
   },
   loginButton: {
       width: "100%",
       height: 70,
       backgroundColor: "#fc5c65",     
},
 registerButton: {
     width: "100%",
     height: 70,
     backgroundColor: "#4ecdc4"
 }
})
export default WelcomeScreen;