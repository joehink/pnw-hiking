import React from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import AppNavigation from './src/components/navigation/TabNavigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { Font } from 'expo';

class App extends React.Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Setting a timer', '[2']);
    }
    componentDidMount() {
        Font.loadAsync({
            'Righteous': require('./assets/fonts/Righteous-Regular.ttf'),
          });
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={styles.container}>
                    <AppNavigation />
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

export default App;
