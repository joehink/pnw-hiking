import React, { Component } from 'react';
import { Text, LayoutAnimation } from 'react-native';
import { Card, Error } from '../reusable';
import { connect } from 'react-redux';
import { searchRadiusChange, setUserLocation, getCurrUser } from '../../actions';
import { Slider, Button, Icon } from 'react-native-elements';

class DiscoverScreen extends Component {
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
        const { error } = this.props;
        if (error) {
            return <Error errorMessage={error} />
        } 
    }
    componentDidUpdate() {
        LayoutAnimation.spring();
    }
    render() {
        const { searchRadius } = this.props;
        return (
            <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                {this.renderError()}
                <Slider
                    minimumValue={1}
                    maximumValue={200}
                    thumbTintColor={'black'}
                    step={1}
                    style={{ width: '70%'}}
                    value={searchRadius}
                    onValueChange={value => this.props.searchRadiusChange(value)} />
                <Button 
                    title={`Search for trails within ${searchRadius} miles`}
                    onPress={this.gpsAuthCheck.bind(this)} 
                    rounded
                    backgroundColor="#2cb42c"
                    buttonStyle={{ width: '100%' }}
                />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { 
        searchRadius: state.discover.searchRadius, 
        error: state.discover.error, 
        user: state.currUser 
    }
}

export default connect(mapStateToProps, { searchRadiusChange, setUserLocation, getCurrUser })(DiscoverScreen);
