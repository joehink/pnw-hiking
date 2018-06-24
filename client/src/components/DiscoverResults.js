import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Card from './reusable/Card';
import TrailList from './TrailList';
import { connect } from 'react-redux';
import { findTrails } from '../actions';

import Map from './Map';

class DiscoverResults extends Component {
    constructor(props) {
        super(props)
        this.props.navigation.addListener('didFocus', (o) => {
            this.setState({});
        });
    }
  
    renderResults() {
        const { trails, loading, userLocation, navigation } = this.props;

        if (loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        } else if (trails.length > 0) {
            return (
                <Card>
                    <Map 
                        currLocation={userLocation.coords} 
                        height={{height: '40%'}} 
                        trails={trails}
                    />
                    <TrailList navigation={navigation}/>
                </Card>
            )
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Sorry, no trails nearby</Text>
                </View>
            )
        }
    }
    componentDidMount() {
        const { userLocation, searchRadius } = this.props;
        this.props.findTrails({position: userLocation, searchRadius})
    }
    render() {
        return (
            <Card>
                {this.renderResults()}
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { 
        userLocation: state.userLocation, 
        trails: state.trailList.results,
        searchRadius: state.searchRadius,
        loading: state.trailList.loading
    }
}

export default connect(mapStateToProps, { findTrails })(DiscoverResults);
