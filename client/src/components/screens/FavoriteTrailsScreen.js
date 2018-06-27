import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchFavoriteTrails } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class FavoriteTrailsScreen extends React.Component {
    renderTrailList() {
        const { user, favoriteTrails, navigation } = this.props;

        let sortedTrails = Object.values(favoriteTrails.trails).sort((a,b) => {
            return a.length > b.length
        })

        if (user && user.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else if (user && favoriteTrails.trails) {
            return <TrailList navigation={navigation} trails={sortedTrails} favorites={true}/>
        } else {
            return (
                <LogInRedirect />
            )
        }
    }
    componentDidMount() {
        this.props.fetchFavoriteTrails();
        this.props.navigation.addListener('didFocus', () => {
            this.setState({});
        });
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

export default connect(mapStateToProps, { fetchFavoriteTrails })(FavoriteTrailsScreen);
