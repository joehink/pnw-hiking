import React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from './Map';


class DiscoverScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    margin: 'auto',
    width: '100%',
    height: '50%'
  },
});

export default DiscoverScreen;
