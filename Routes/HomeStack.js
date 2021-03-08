import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../components/Screens/WelcomeScreen';
import ViewImageScreen from '../components/Screens/ViewImageScreen';
import Header from '../Shared/header';

const screens = {
    
      Home: {
          screen: WelcomeScreen,
          navigationOptions: {
              headerTitle: () => {
                return (
                      <Header/>
                //     <View style={styles.header}>
                //     <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
                //    <View>
                //        <Text style={styles.headerText}>Game Center</Text>
                //    </View>
                // </View>
                )

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