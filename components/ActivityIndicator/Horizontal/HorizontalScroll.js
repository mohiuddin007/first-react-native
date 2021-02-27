import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const HorizontalScroll = () => {
    return (
        <ScrollView  horizontal={true}>
    <View style={styles.container}></View>
    <View style={styles.container}></View>
    <View style={{width:100, height:100, backgroundColor: "orange"}}></View>
    <View style={styles.container}></View>
    <View style={{width:100, height:100, backgroundColor: "orange"}}></View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#181818',
      width: 100,
      height: 100,
      // paddingTop: 20
      marginTop: 20
    },
  });

export default HorizontalScroll;