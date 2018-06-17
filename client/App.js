import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Map from './src/components/Map';
import TabNavigation from './src/components/TabNavigation';

export default class App extends React.Component {

    getUserLocation () {

    }

    render() {
        return (
        <View style={styles.container}>
            {/* <TopBar text='Discover New Trails' /> */}
            <TabNavigation />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});
