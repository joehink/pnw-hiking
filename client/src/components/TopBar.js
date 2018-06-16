import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import Hiker from '../images/hiker.png';

// import MapView from 'react-native-maps';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.topBar}>
        <Text style={styles.topBarHeader}>
            Discover New Trails
        </Text>
        {/* <Image
            style={styles.topBarImage}
            source={require('../images/hiker.png')}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxHeight: '9.5%',
  },

  topBarImage: {
    resizeMode: 'center',
    width: 50,
    height: 50
  },

  topBarHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: '10%',
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Avenir'
  }
});

export default TopBar;
