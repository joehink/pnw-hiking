import React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from './Map';

class DiscoverResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Map currLocation={this.props.navigation.state.params.coords} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default DiscoverResults;
