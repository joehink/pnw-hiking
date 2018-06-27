import React from 'react';
import { ActivityIndicator } from 'react-native';
import Card from '../reusable/Card';
import TrailList from '../reusable/TrailList';
import { connect } from 'react-redux';
import { fetchFavoriteTrails } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class FavoriteTrailsScreen extends React.Component {
    renderTrailList() {
        if (this.props.user && this.props.user.fetching) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else if (this.props.user && this.props.user.favorites) {
            let favoriteTrails = Object.values(this.props.user.favorites).sort((a,b) => {
                return a.length > b.length
            })
            return <TrailList navigation={this.props.navigation} trails={favoriteTrails} favorites={true}/>
        } else {
            return (
                <LogInRedirect />
            )
        }
    }
    componentDidMount() {
        this.props.fetchFavoriteTrails();
        this.props.navigation.addListener('didFocus', (o) => {
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
    return { userLocation: state.userLocation.coords, user: state.currUser }
}

export default connect(mapStateToProps, { fetchFavoriteTrails })(FavoriteTrailsScreen);
