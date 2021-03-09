import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../components/Screens/WelcomeScreen';
import ViewImageScreen from '../components/Screens/ViewImageScreen';
import Header from '../Shared/header';
import React from 'react';

const screens = {
    
      Home: {
          screen: WelcomeScreen,
          navigationOptions: ({navigation}) =>{
              return{
                headerTitle: () => <Header navigation={navigation}/>,
              }
          }
      },
      Details: {
        screen: ViewImageScreen,
        navigationOptions: {
            title: 'Details',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {background: '#eee', height: 60}
    }
});

export default HomeStack; 