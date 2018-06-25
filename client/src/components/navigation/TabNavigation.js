import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import { DiscoverStack, ProfileStack, FavoriteStack } from './NavigationStacks';

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

const AppNavigation = createSwitchNavigator({
    SignUp: {
      screen: SignUp
    },
    LogIn: {
      screen: LogIn
    },
    MainApp: {
        screen: TabNavigation,
    }
}, {
    initialRouteName: 'MainApp',
});
    

export default AppNavigation;