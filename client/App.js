import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Map from './src/components/Map';
import TopBar from './src/components/TopBar';
import TabNavigation from './src/components/TabNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <TabNavigation />
        {/* <Map 
          markers = { [{
            title: "My Marker",
            desc: "Marker Desc"
          }] } 
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
});
