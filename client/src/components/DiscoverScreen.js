import React from 'react';
import { Text } from 'react-native';
import Card from './reusable/Card';
import HikeButton from './reusable/HikeButton';
import { connect } from 'react-redux';
import { findTrails, searchRadiusChange, setUserLocation } from '../actions';
import { Slider } from 'react-native-elements';

class DiscoverScreen extends React.Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.props.setUserLocation(position)
        }, err => console.log(err));
    }

    render() {
        const { userLocation, searchRadius, navigation } = this.props;
        return (
            <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                <HikeButton 
                    onPress={() => this.props.findTrails({userLocation, searchRadius, navigation})} 
                />
                <Slider
                    minimumValue={1}
                    maximumValue={200}
                    thumbTintColor={'black'}
                    step={1}
                    style={{ width: '70%'}}
                    value={searchRadius}
                    onValueChange={value => this.props.searchRadiusChange(value)} />
                <Text>How Far Away: {searchRadius} miles</Text>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { searchRadius: state.searchRadius, userLocation: state.userLocation }
}

export default connect(mapStateToProps, { findTrails, searchRadiusChange, setUserLocation })(DiscoverScreen);
