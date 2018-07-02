import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchCompletedTrails, getCurrUser } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class CompletedTrailsScreen extends Component {
    constructor(props) {
        super(props);   
        const { user } = this.props; 
            
        this.props.navigation.addListener('willFocus', () => {
            if (user.user) {
                this.props.fetchCompletedTrails(user.user.uid);
            }
        })
    }
    renderTrailList() {
        const { user, completedTrails, navigation } = this.props;

        if (user.user && completedTrails.loading || user.loading) {
            return <ActivityIndicator size="large" style={{ flex: 1 }} />
        }
        else if (user.user && completedTrails.trails) {
            return <TrailList navigation={navigation} trails={completedTrails.trails}/>
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
    return { 
        userLocation: state.discover.userLocation.coords, 
        user: state.currUser, 
        completedTrails: state.completedTrails 
    }
}

export default connect(mapStateToProps, { fetchCompletedTrails, getCurrUser })(CompletedTrailsScreen);
