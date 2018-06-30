import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchCompletedTrails, getCurrUser } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class CompletedTrailsScreen extends Component {
    constructor(props) {
        super(props);
        this.props.getCurrUser();
        
        this.props.navigation.addListener('willFocus', () => {
            if (this.props.user.user) {
                this.props.fetchCompletedTrails(this.props.user.user.uid);
            }
        })
    }
    renderTrailList() {
        const { user, completedTrails, navigation } = this.props;

        if (user.user && completedTrails.loading || user.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
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
