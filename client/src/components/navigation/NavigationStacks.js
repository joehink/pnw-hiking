import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverResults from '../screens/DiscoverResults';
import TrailScreen from '../screens/TrailScreen';
import FavoriteTrailsScreen from '../screens/FavoriteTrailsScreen';
import { createStackNavigator } from 'react-navigation';

export const DiscoverStack = createStackNavigator({
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: {
            title: 'Discover',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir',
            }
        },
    },
    Results: {
        screen: DiscoverResults,
        navigationOptions: {
            title: 'Trails',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        },
    },
    Trail: {
        screen: TrailScreen,
        navigationOptions: ({navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        })
    },
}, {
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#2cb42c'}
});
  
export const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        },
    },
}, {
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#2cb42c'}
});

export const FavoriteStack = createStackNavigator({
    Favorites: {
        screen: FavoriteTrailsScreen,
        navigationOptions: {
            title: 'Favorites',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        },
    },
    Trail: {
        screen: TrailScreen,
        navigationOptions: ({navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        })
    },
},{
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#2cb42c'}
});
