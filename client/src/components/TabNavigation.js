import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import DiscoverScreen from './DiscoverScreen';
import ProfileScreen from './ProfileScreen';

const TabNavigation =  createBottomTabNavigator(
    {
      Discover: DiscoverScreen,
      Profile: ProfileScreen,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Discover') {
            iconName = `home${focused ? '' : ''}`;
          } else if (routeName === 'Profile') {
            iconName = `account-circle${focused ? '' : ''}`;
          }
  
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
    }
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabNavigation;
