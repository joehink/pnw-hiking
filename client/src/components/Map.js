import React from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';

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
                        this.props.hikes.map((hike, i) => { 
                            return <MapView.Marker
                                        coordinate={{
                                            latitude: hike.latitude,
                                            longitude: hike.longitude
                                        }}
                                        key={ i }
                                        title={ hike.name }
                                        description={ hike.location }
                                    >
                                        <Image source={require('../images/hiker.png')} style={{ width: 20, height: 20 }} />
                                    </MapView.Marker>
                        })
                    }
            </MapView>
        );
    }
};

export default Map;
