import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Card from './reusable/Card';
import TrailList from './TrailList';
import { connect } from 'react-redux';
import { fetchFavoriteTrails } from '../actions';
import LogInRedirect from './navigation/LogInRedirect';


class FavoriteTrailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchFavoriteTrails();
        this.props.navigation.addListener('didFocus', (o) => {
            this.setState({});
        });
    }

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

    render() {
        return (
            <View style={styles.container}>
                {this.renderTrailList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
});

const mapStateToProps = state => {
    console.log(state);
    return { userLocation: state.userLocation.coords, user: state.currUser }
}

export default connect(mapStateToProps, { fetchFavoriteTrails })(FavoriteTrailsScreen);
