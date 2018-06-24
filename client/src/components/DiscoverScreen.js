import React, { Component } from 'react';
import { Text, LayoutAnimation } from 'react-native';
import Card from './reusable/Card';
import Error from './reusable/Error';
import { connect } from 'react-redux';
import { searchRadiusChange, setUserLocation } from '../actions';
import { Slider, Button } from 'react-native-elements';

class DiscoverScreen extends React.Component {
    constructor(props) {
        super(props)
        // this.props.navigation.addListener('didFocus', (o) => {
        //     this.setState({});
        // });
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            //If we have their permission, save their location to state
            this.props.setUserLocation(position);
        }, err => console.log(err));
    }

    gpsAuthCheck() {
        //If the user has not given permission to use their location, ask them
        navigator.geolocation.getCurrentPosition(position => {
            //If we have their permission, save their location to state
            this.props.setUserLocation(position);
            //Navigate to the list of trails
            this.props.navigation.navigate('Results');
        }, err => console.log(err));
    }
    renderError() {
        if (this.props.error) {
            return <Error errorMessage={this.props.error} />
        } else {
            return <Text style={{ padding: 10 }}>Tap Go! to find hikes near you</Text>
        }
    }
    componentDidUpdate() {
        LayoutAnimation.spring();
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.props.setUserLocation(position);
        }, err => console.log(err));
    }
    render() {
        return (
            <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                {this.renderError()}
                <Slider
                    minimumValue={1}
                    maximumValue={200}
                    thumbTintColor={'black'}
                    step={1}
                    style={{ width: '70%'}}
                    value={this.props.searchRadius}
                    onValueChange={value => this.props.searchRadiusChange(value)} />
                <Button 
                    title={`Search for trails within ${this.props.searchRadius} miles`}
                    onPress={this.gpsAuthCheck.bind(this)} 
                />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { searchRadius: state.searchRadius, error: state.trailList.error }
}

export default connect(mapStateToProps, { searchRadiusChange, setUserLocation })(DiscoverScreen);
