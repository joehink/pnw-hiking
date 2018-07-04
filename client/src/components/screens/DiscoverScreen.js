import React, { Component } from 'react';
import { Text, LayoutAnimation, ImageBackground, View } from 'react-native';
import { Card, Error } from '../reusable';
import { connect } from 'react-redux';
import { searchRadiusChange, setUserLocation, getCurrUser } from '../../actions';
import { Button, Icon, Slider } from 'react-native-elements';

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
            return <View style={{ backgroundColor: '#E50000', width: 300, padding: 7.5, marginBottom: 15, elevation: 1, shadowOffset:{  width: 0,  height: 0 }, shadowColor: 'black', shadowOpacity: 0.15, shadowRadius: 5 }}>
                        <Text style={{ padding: 5, borderColor: 'white', borderWidth: 2, color: 'white', textAlign: 'center' }}>
                            {error}
                        </Text>
                    </View>
        } else {
            return <View style={{ backgroundColor: '#06AA5B', width: 300, padding: 7.5, marginBottom: 15, elevation: 1, shadowOffset:{  width: 0,  height: 0 }, shadowColor: 'black', shadowOpacity: 0.15, shadowRadius: 5 }}>
                        <Text style={{ padding: 5, borderColor: 'white', borderWidth: 2, color: 'white', textAlign: 'center' }}>
                            Use the slider to set your search radius
                        </Text>
                    </View>
        }
    }
    componentDidUpdate() {
        LayoutAnimation.spring();
    }
    render() {
        const { searchRadius } = this.props;
        return (
            <ImageBackground 
                // source={{ uri: 'https://image.freepik.com/free-vector/farm-landscape-with-river-and-mountain_8976-3.jpg' }} 
                style={{ width: '100%', height: '100%'}}
            >
                <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                    {this.renderError()}
                    <Slider
                        minimumValue={1}
                        maximumValue={200}
                        thumbTintColor={'black'}
                        step={1}
                        style={{ width: '70%' }}
                        value={searchRadius}
                        onValueChange={value => this.props.searchRadiusChange(value)} 
                        trackStyle={{ backgroundColor: 'gray' }}
                    />
                    <Text style={{ fontSize: 16, marginTop: 15 }}>
                        {`Search for trails within ${searchRadius} ${searchRadius > 1 ? 'miles' : 'mile'}`}
                    </Text>
                    <Button 
                        title="Go"
                        onPress={this.gpsAuthCheck.bind(this)} 
                        rounded
                        backgroundColor="#06AA5B"
                        buttonStyle={{ width: 100 }}
                        containerViewStyle={{ margin: 25, elevation: 1, shadowOffset:{  width: 0,  height: 0 }, shadowColor: 'black', shadowOpacity: 0.15, shadowRadius: 5 }}
                    />
                </Card>
            </ImageBackground>
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
