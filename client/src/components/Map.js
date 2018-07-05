import React from 'react';
// import MapView from 'react-native-maps';
import { MapView } from 'expo';
const hiker = require('../images/hiker.png');

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
                    { 
                        this.props.trails.map((trail, i) => { 
                            return <MapView.Marker
                                        coordinate={{
                                            latitude: trail.latitude,
                                            longitude: trail.longitude
                                        }}
                                        key={ i }
                                        image={hiker}
                                        title={ trail.name }
                                        description={ trail.location }
                                    >
                                    </MapView.Marker>
                        })
                    }
            </MapView>
        );
    }
};

export default Map;
