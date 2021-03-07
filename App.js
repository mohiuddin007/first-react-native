import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import HorizontalScroll from "./components/ActivityIndicator/Horizontal/HorizontalScroll";
import PizzaTranslator from "./components/ActivityIndicator/PizzaTranslator";
import NativeModal from "./components/NativeModal/NativeModal";
import DisplayImage from "./components/DisplayImage/DisplayImage";
import WelcomeScreen from "./components/Screens/WelcomeScreen";
import ViewImageScreen from "./components/Screens/ViewImageScreen";
import FlatListPr from "./components/FlatList/FlatListPr";
import Navigator from './Routes/Drawer';

const App = () => {
  // console.log("chrome debugging");
  // let p;
  // p.toString();

  return (
    <>
      {/* <ScrollView >
        <PizzaTranslator />
        <HorizontalScroll />
        <NativeModal/>
        <DisplayImage />
      </ScrollView> */}
      {/* <WelcomeScreen/> */}
      {/* <ViewImageScreen/> */}
      {/* <FlatListPr/> */}
      <Navigator/>
    </>
  )
};



export default App;