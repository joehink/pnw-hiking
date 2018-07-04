import React from 'react';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverResults from '../screens/DiscoverResults';
import TrailScreen from '../screens/TrailScreen';
import FavoriteTrailsScreen from '../screens/FavoriteTrailsScreen';
import CompletedTrailsScreen from '../screens/CompletedTrailsScreen';
import StartScreen from '../screens/StartScreen';
import HeaderButton from '../HeaderButton';
import { createStackNavigator } from 'react-navigation';

export const StartScreenStack = createStackNavigator({
    StartScreen: {
        screen: StartScreen,
        navigationOptions: {
            header: null
        }
    }
},{
    cardStyle:{ backgroundColor:'#fff'}
})

export const DiscoverStack = createStackNavigator({
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Discover',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22
            },
        }),
    },
    Results: {
        screen: DiscoverResults,
        navigationOptions: ({navigation }) => ({
            title: 'Trails',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
            }
        }),
    },
    Trail: {
        screen: TrailScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
            }
        })
    },
}, {
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#fff'}
});
  
export const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({navigation }) => ({
            title: 'Profile',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22
            }
        }),
    },
}, {
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#fff'}
});

export const FavoriteStack = createStackNavigator({
    Favorites: {
        screen: FavoriteTrailsScreen,
        navigationOptions: ({navigation }) => ({
            title: 'Favorites',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22
            }
        }),
    },
    Trail: {
        screen: TrailScreen,
        navigationOptions: ({navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22
            }
        })
    },
},{
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#fff'}
});

export const CompletedStack = createStackNavigator({
    Completed: {
        screen: CompletedTrailsScreen,
        navigationOptions: ({navigation }) => ({
            title: 'Completed Trails',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22
            }
        }),
    },
    Trail: {
        screen: TrailScreen,
        navigationOptions: ({navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#06AA5B'
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22
            }
        })
    },
},{
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#fff'}
});
