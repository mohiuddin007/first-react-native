import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Switch, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import RNSpinner from './RNSpinner';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const onPressLearnMore = () =>{
    alert('Learn More')
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

 const pressed = () =>{
   Alert.alert(" message title", "this is message part",[
     {
       text: "Ask me later",
       onPress: () => console.log("ask me later") 
     },
     {
       text: "Cancel",
       onPress: () => console.log("cancel")
     },
     {
       text: "Ok",
       onPress: () => console.log("Pressed okkk")
     }
   ])
 }
  return (
    <View style={isEnabled === true ? styles.dark : styles.light }>
      <Text>Some text</Text>
      <View>
      <TouchableWithoutFeedback onPress={() =>{console.log("clicked on image")}}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        </TouchableWithoutFeedback>
        <Button title="click" color="gray" onPress={() => alert("Click")}/>
      </View>
      <View style={styles.inputFeild}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', color: 'white', borderWidth: 1, width: 300, borderRadius: 10 }}
          placeholder="Type here to translate!"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />

        <Text style={{ padding: 10, fontSize: 42 }}>
          {
            text !== "" ?
              text.split(' ').map((word) => word && '🍕').join(' ')
              :
              <RNSpinner />
          }
        </Text>
      </View>
      <Text style={{ textAlign: 'center', color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, necessitatibus voluptatibus? Quidem aliquam beatae doloribus tempora quo accusantium consectetur, asperiores repellendus odit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab rem delectus iure quod dolorum ipsa, facere, quae velit illum iusto ut quo similique praesentium a facilis asperiores reprehenderit? Ullam tenetur nulla velit repudiandae sapiente officia cumque hic non fugit sunt ut, vel ab atque odit eligendi dicta accusantium cum necessitatibus voluptate nemo eos, veritatis accusamus. Nihil qui reprehenderit necessitatibus velit atque, totam earum quasi iusto autem cupiditate voluptas reiciendis at quaerat accusantium repellendus eligendi perferendis soluta consequuntur vitae, ratione, sunt commodi? Soluta laborum provident deleniti modi perspiciatis vel recusandae tenetur ea quisquam facilis aut neque, est repellendus molestias ipsum non alias accusamus minima! Quia iure, architecto ipsa optio sit asperiores, ea ullam deleniti porro itaque magnam reprehenderit aliquid cum soluta dolorem ad rerum voluptate veniam omnis magni eaque non animi nobis! Dolor, eaque corporis provident blanditiis exercitationem debitis repellendus soluta, laudantium expedita quaerat porro? Doloremque explicabo molestiae, tempore eligendi officia quasi, obcaecati, at aut excepturi suscipit doloribus! Repellendus magni voluptates reiciendis! Quae minima quidem ipsum placeat, quaerat esse dolores eum repudiandae fugiat amet, repellat architecto unde illum, quia assumenda eos qui? Animi quam nam magni aliquam optio corporis voluptates ratione cumque veniam rem nulla esse distinctio quo deleniti, repellendus repellat! Est, error nostrum eum libero quibusdam consectetur temporibus commodi praesentium alias cumque. Facere, esse fugit. Quis deserunt nemo dicta quae odio nisi sunt numquam expedita possimus. Qui ullam commodi, illo, voluptas facilis nam porro quam, aperiam totam aspernatur vel est corporis quisquam! Officia asperiores repellat distinctio, fugiat error illum dolorem expedita nulla assumenda placeat sunt quidem laborum libero magni ad eius, blanditiis minima optio ipsa consequatur aperiam sint quaerat. Culpa quibusdam quis quae exercitationem dolorum, dolor sint libero dicta quisquam amet soluta perferendis! Iusto asperiores fugit totam, deserunt enim similique sit laboriosam amet tenetur. Id molestiae adipisci placeat qui delectus. repudiandae provident aspernatur reiciendis expedita?</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        // disabled={true}
        // accessibilityLabel="Learn more about this purple button"
      />

<View >
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

<Button onPress={pressed}
title="Alert"
color="orange"
style={{width: 100, height:60}}
/>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFeild: {
    // justifyContent: "center",
    // textAlign: "center",
    // flex:1, 
    alignItems: "center"
  },
  dark:{
    backgroundColor: "black",
  },
  light:{
    backgroundColor: "#355C7D",
    color: "white"
  }
})
export default PizzaTranslator;