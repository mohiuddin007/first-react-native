import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const RNSpinner = () => {
    return (
        <View >
                {/* <ActivityIndicator /> */}
            <ActivityIndicator size="large" color="orange" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

const spinnerStyle = StyleSheet.create({
    spinnerContainer: {
        flexDirection: "row",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
})
export default RNSpinner;