import { createStackNavigator } from 'react-navigation-stack';
import DisplayImage from '../components/DisplayImage/DisplayImage'

const screens = {
    
      About: {
          screen: DisplayImage,
          navigationOptions: {
              title: 'About game zone',
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