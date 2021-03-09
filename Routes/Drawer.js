import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from 'react-navigation';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';
import PizzaTranslator from '../components/ActivityIndicator/PizzaTranslator';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    PizzaTranslator: {
        screen: PizzaTranslator     
    }
})

export default createAppContainer(RootDrawerNavigator);