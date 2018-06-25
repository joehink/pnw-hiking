import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import DiscoverScreen from './DiscoverScreen';
import ProfileScreen from './ProfileScreen';
import DiscoverResults from './DiscoverResults';
import TrailScreen from './TrailScreen';
import LogIn from './LogIn';
import SignUp from './SignUp';
import FavoriteTrailsScreen from './FavoriteTrailsScreen';

const DiscoverStack = createStackNavigator({
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
  
const ProfileStack = createStackNavigator({
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

const FavoriteStack = createStackNavigator({
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

const TabNavigation =  createBottomTabNavigator(
    {
        Discover: DiscoverStack,
        Favorites: FavoriteStack,
        Profile: ProfileStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Discover') {
                    iconName = `search${focused ? '' : ''}`;
                } else if (routeName === 'Profile') {
                    iconName = `account-circle${focused ? '' : ''}`;
                } else if (routeName === 'Favorites') {
                    iconName = `star${focused ? '' : ''}`;
                }
                return <Icon name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#2cb42c',
            inactiveTintColor: 'gray',
        },
        swipeEnabled: true,
    },
);

const UserAuth = createSwitchNavigator({
    SignUp: {
      screen: SignUp
    },
    LogIn: {
      screen: LogIn
    },
    LoggedInApp: {
        screen: TabNavigation,
    },
    SignedOutApp: {
        screen: DiscoverStack
    },
}, {
    initialRouteName: 'LogIn',
});
    

export default UserAuth;
