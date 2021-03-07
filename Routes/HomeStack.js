import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../components/Screens/WelcomeScreen';
import ViewImageScreen from '../components/Screens/ViewImageScreen';

const screens = {
    
      Home: {
          screen: WelcomeScreen,
          navigationOptions: {
              title: 'Welcome',
            //   headerStyle: {background: '#eee'}
          }
      },
      Details: {
        screen: ViewImageScreen,
        navigationOptions: {
            title: 'Details',
            // headerStyle: {background: '#eee'}
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