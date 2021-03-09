import { createStackNavigator } from 'react-navigation-stack';
import DisplayImage from '../components/DisplayImage/DisplayImage'
import Header from '../Shared/header';
import React from 'react';

const screens = {
    
      About: {
          screen: DisplayImage,
          navigationOptions: ({navigation}) =>{
            return{
              headerTitle: () => <Header navigation={navigation}/>,
            }
        }
      }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {background: '#eee', height: 60}
    }
});

export default AboutStack;