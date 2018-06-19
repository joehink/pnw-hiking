import React from 'react';
import MapView from 'react-native-maps';

class Map extends React.Component {
    render() {
        return (
            <MapView 
                style={this.props.height}
                initialRegion={{
                    latitude: this.props.currLocation.latitude,
                    longitude: this.props.currLocation.longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props.currLocation.latitude,
                            longitude: this.props.currLocation.longitude
                        }}
                        key={ this.props.currLocation.longitude }
                        image={require('../images/currentLocation.png')}
                        title={ 'Current Location' }
                        // description={ marker.desc }
                    />
                {/* { 
                this.props.markers.map((marker) => {
                    return  */}
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
                {/* })
                } */}
            </MapView>
        );
    }
};

export default Map;
