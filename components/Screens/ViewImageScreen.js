import React from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';

const ViewImageScreen = ({navigation}) => {
     const pressHandler = () => {
         navigation.goBack();
     }
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../../assets/dresden-5987976_1280.jpg')}>

            </Image>
            <Button title="Back to home" onPress={pressHandler}/>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        width: 50, height: 50, backgroundColor: '#fc5c65',
        position: 'absolute',
        top: 20,
        left: 30,
    },
    deleteIcon: {
        width: 50, height: 50, backgroundColor: '#4ecdc4',
        position: 'absolute',
        top: 20,
        right: 30,
    },
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    image: {
        width: 300,
        height: 500,
        margin: 30,
    }
})
export default ViewImageScreen;