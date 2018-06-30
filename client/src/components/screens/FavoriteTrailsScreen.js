import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchFavoriteTrails, getCurrUser } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class FavoriteTrailsScreen extends Component {
    constructor(props) {
        super(props);
        this.props.getCurrUser();
        
        this.props.navigation.addListener('willFocus', () => {
            if (this.props.user.user) {
                this.props.fetchFavoriteTrails(this.props.user.user.uid);
            }
        })
        
    }
    renderTrailList() {
        const { user, favoriteTrails, navigation } = this.props;

        if (user.user && favoriteTrails.loading || user.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else if (user.user && favoriteTrails.trails) {
            return <TrailList navigation={navigation} trails={favoriteTrails.trails} favorites={true} />
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
        favoriteTrails: state.favoriteTrails 
    }
}

export default connect(mapStateToProps, { fetchFavoriteTrails, getCurrUser })(FavoriteTrailsScreen);
