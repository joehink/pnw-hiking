import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Map from './src/components/Map';
import TabNavigation from './src/components/TabNavigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={styles.container}>
                    {/* <TopBar text='Discover New Trails' /> */}
                    <TabNavigation />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});
