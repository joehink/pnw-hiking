import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchCompletedTrails } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class CompletedTrailsScreen extends Component {
    constructor(props) {
        super(props);
        if (this.props.user.user) {
            this.props.navigation.addListener('willFocus', () => {
                this.props.fetchCompletedTrails(this.props.user.user.uid);
            })
        }
    }
    renderTrailList() {
        const { user, completedTrails, navigation } = this.props;

        let sortedTrails = Object.values(completedTrails.trails).sort((a,b) => {
            return a.length > b.length
        })

        if (user.user && completedTrails.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else if (user.user && completedTrails.trails) {
            return <TrailList navigation={navigation} trails={sortedTrails}/>
        } else {
            return (
                <LogInRedirect />
            )
        }
    }
    render() {
        return (
            <Card>
                {this.renderTrailList()}
            </Card>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { 
        userLocation: state.discover.userLocation.coords, 
        user: state.currUser, 
        completedTrails: state.completedTrails 
    }
}

export default connect(mapStateToProps, { fetchCompletedTrails })(CompletedTrailsScreen);
