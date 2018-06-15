import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Map from './src/components/Map';

export default class App extends React.Component {
  render() {
    return (
      <Map 
        markers = { [{
          title: "My Marker",
          desc: "Marker Desc"
        }] } 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
