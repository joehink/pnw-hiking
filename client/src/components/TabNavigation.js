import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import DiscoverScreen from './DiscoverScreen';
import ProfileScreen from './ProfileScreen';
import DiscoverResults from './DiscoverResults';
import TrailScreen from './TrailScreen';
import LogIn from './LogIn';

export const DiscoverStack = createStackNavigator({
    Discover: {
        screen: LogIn,
        navigationOptions: {
            title: 'Discover',
            headerStyle: {
                backgroundColor: '#2cb42c',
                paddingBottom: '1%',
                shadowColor: 'transparent',
                borderBottomColor:'transparent',
                borderBottomWidth: 0 ,
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
    // Details: DetailsScreen,
});

const TabNavigation =  createBottomTabNavigator(
    {
        Discover: DiscoverStack,
        Profile: ProfileStack,
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
                }
    
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#2cb42c',
            inactiveTintColor: 'gray',
        },
    }
  );

export default TabNavigation;
