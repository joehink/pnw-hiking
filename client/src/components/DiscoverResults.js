import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './reusable/Card';
import TrailList from './TrailList';
import { connect } from 'react-redux';

import Map from './Map';

class DiscoverResults extends Component {
    constructor(props) {
        super(props)
        this.props.navigation.addListener('didFocus', (o) => {
            this.setState({});
        });
    }
    
    renderTrailList() {
        if (this.props.trails.length > 0) {
            return <TrailList navigation={this.props.navigation} trails={this.props.trails} />
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Sorry, no trails nearby</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <Card>
                <Map currLocation={this.props.userLocation} height={{height: '40%'}} trails={this.props.trails}/>
                {
                    this.props.trails.length > 0 &&
                    <TrailList navigation={this.props.navigation} trails={this.props.trails} />
                }
                {
                    this.props.trails.length == 0 &&
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Sorry, no trails nearby</Text>
                    </View>
                }
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return { userLocation: state.userLocation.coords, trails: state.trailList.results }
}

export default connect(mapStateToProps)(DiscoverResults);
