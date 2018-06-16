import React from 'react';
import { StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

class Map extends React.Component {
  render() {
    return (
      <MapView style={styles.container}>
        { 
        //   this.props.markers.map((marker) => {
            // return 
            <MapView.Marker
              coordinate={{
                latitude: 47.0248,
                longitude: -120.9406
              }}
              key={ 47.0248 }
              image={require('../images/hiker.png')}
            //   title={ marker.title }
            //   description={ marker.desc }
            />
        //   })
        }
      </MapView>
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

export default Map;
