import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import LoginStack from './LoginStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  LoginStack: {
    screen: LoginStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
