import React from 'react';
import { Text, LayoutAnimation } from 'react-native';
import Card from './reusable/Card';
import HikeButton from './reusable/HikeButton';
import Error from './reusable/Error';
import { connect } from 'react-redux';
import { findTrails, searchRadiusChange, setUserLocation } from '../actions';
import { Slider } from 'react-native-elements';

class DiscoverScreen extends React.Component {

    gpsAuthCheck() {
        const { searchRadius, navigation } = this.props;

        //If the user has not given permission to use their location, ask them
        navigator.geolocation.getCurrentPosition(position => {
            //If we have their permission, save their location to state
            this.props.setUserLocation(position);
            //Then request a list of trails from the api
            this.props.findTrails({position, searchRadius, navigation})
        }, err => console.log(err));
    }
    renderError() {
        if (this.props.error) {
            return <Error errorMessage={this.props.error} />
        } else {
            return <Text style={{ padding: 10 }}>Tap Go! to find hikes near you</Text>
        }
    }
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    render() {
        return (
            <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                {this.renderError()}
                <HikeButton 
                    onPress={this.gpsAuthCheck.bind(this)} 
                />
                <Slider
                    minimumValue={1}
                    maximumValue={200}
                    thumbTintColor={'black'}
                    step={1}
                    style={{ width: '70%'}}
                    value={this.props.searchRadius}
                    onValueChange={value => this.props.searchRadiusChange(value)} />
                <Text>How Far Away: {this.props.searchRadius} miles</Text>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { searchRadius: state.searchRadius, error: state.trailList.error }
}

export default connect(mapStateToProps, { findTrails, searchRadiusChange, setUserLocation })(DiscoverScreen);
