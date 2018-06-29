import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { findTrails } from '../../actions';

import Map from '../Map';

class DiscoverResults extends Component {
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
                    <TrailList navigation={navigation} trails={trails} discover/>
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
        this.props.findTrails({position: userLocation.coords, searchRadius})
        this.props.navigation.addListener('didFocus', () => {
            this.setState({});
        });
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
        userLocation: state.discover.userLocation, 
        trails: state.discover.trails,
        searchRadius: state.discover.searchRadius,
        loading: state.discover.loading
    }
}

export default connect(mapStateToProps, { findTrails })(DiscoverResults);
