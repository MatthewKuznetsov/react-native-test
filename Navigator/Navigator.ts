import { HomeComponent } from '../HomeComponent/Home';
import { createStackNavigator } from 'react-navigation-stack';
import { PeopleComponent } from '../PeopleComponent/PeopleComponent';
import { PostsComponent } from '../PostsComponent/PostsComponent';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeComponent
    },
    People: {
      screen: PeopleComponent
    },
    Posts: {
      screen: PostsComponent
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;