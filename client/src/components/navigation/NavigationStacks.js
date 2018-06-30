import React from 'react';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverResults from '../screens/DiscoverResults';
import TrailScreen from '../screens/TrailScreen';
import FavoriteTrailsScreen from '../screens/FavoriteTrailsScreen';
import CompletedTrailsScreen from '../screens/CompletedTrailsScreen';
import HeaderButton from '../HeaderButton';
import { createStackNavigator } from 'react-navigation';

export const DiscoverStack = createStackNavigator({
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Discover',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir',
            }
        }),
    },
    Results: {
        screen: DiscoverResults,
        navigationOptions: ({navigation }) => ({
            title: 'Trails',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        }),
    },
    Trail: {
        screen: TrailScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
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
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
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
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        }),
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
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
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
            title: 'Completed',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 
            },
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        }),
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
            headerRight: ( <HeaderButton navigation={navigation} /> ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 22,
                // fontFamily: 'Avenir'
            }
        })
    },
},{
    headerMode: 'screen',
    cardStyle:{ backgroundColor:'#fff'}
});
