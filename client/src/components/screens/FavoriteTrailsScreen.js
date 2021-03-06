import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchFavoriteTrails, getCurrUser } from '../../actions';
import LogInRedirect from '../LogInRedirect';


class FavoriteTrailsScreen extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        this.props.navigation.addListener('willFocus', () => {
            if (user.user) {
                this.props.fetchFavoriteTrails(user.user.uid);
            }
        })
        
    }

    renderTrailList() {
        const { user, favoriteTrails, navigation } = this.props;
        if (user.user && favoriteTrails.loading || user.loading) {
            return <ActivityIndicator size="large" style={{ flex: 1 }} />
        } else if (user.user && favoriteTrails.trails.length === 0) {
            return  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>You have not favorited any trails yet.</Text>
                    </View>
        } else if (user.user && favoriteTrails.trails) {
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
        user: state.currUser, 
        favoriteTrails: state.favoriteTrails 
    }
}

export default connect(mapStateToProps, { fetchFavoriteTrails, getCurrUser })(FavoriteTrailsScreen);
