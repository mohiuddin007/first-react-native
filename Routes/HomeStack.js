import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import WelcomeScreen from '../components/Screens/WelcomeScreen';
import ViewImageScreen from '../components/Screens/ViewImageScreen';

const screens = {
    
      Home: {
          screen: WelcomeScreen
      },
      Details: {
        screen: ViewImageScreen
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 