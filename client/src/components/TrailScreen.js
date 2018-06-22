import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addFavoriteTrail, fetchFavoriteTrails, deleteFavoriteTrail } from '../actions';
import { Popup } from 'react-native-map-link';

class TrailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.props.fetchFavoriteTrails();
        this.state = {}
    }


    mapDirections = () => {
        this.setState({
            isVisible: true,
        })
    }

    updateFavoriteTrail(trail, name) {
        if (this.props.user) {
            let favoriteTrails = this.props.user.favorites;
            let trailID = '';
            for (let key in favoriteTrails) {
                if (favoriteTrails[key].name === name) {
                    trailID = key;
                }
            }
            if (trailID) {
                this.props.deleteFavoriteTrail(trailID)
            } else {
                this.props.addFavoriteTrail(trail);
            }
        }
    }

    isFavorited(name) {
        if (this.props.user) {
            let favoriteTrails = this.props.user.favorites;
            for (let key in favoriteTrails) {
                if (favoriteTrails[key].name === name) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        const { ascent, conditionDetails, conditionStatus, difficulty, imgMedium, location, 
                    latitude, longitude, summary, name, length } = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.container}>
                <Image
                    style={styles.trailImage}
                    source={{uri: `${imgMedium}`}}
                />
                <Text style={styles.trailName}>{name}</Text>
                <View style={styles.trailDetailsContainer}>
                    <View>  
                        <View style={styles.trailDetails}>
                            <Icon type='entypo' name='location-pin' size={25}/>
                            <Text style={styles.detailsHeader}>Location</Text>
                        </View>
                        <Text style={{textAlign:'center'}} >{location}</Text>
                    </View>
                    <View>
                        <View style={styles.trailDetails}>
                            <Icon type='material-community' name='walk' size={25}/>
                            <Text style={styles.detailsHeader}>Distance</Text>
                        </View>
                        <Text style={{textAlign:'center'}}>{length} mi</Text>
                    </View>
                    <View> 
                        <View style={styles.trailDetails}>
                            <Icon type='material-community' name='trending-up' size={25}/>
                            <Text style={styles.detailsHeader}>Ascent</Text>
                        </View>
                        <Text style={{textAlign:'center'}}>{ascent} ft.</Text>
                    </View>
                </View>
                <View style={styles.trailDetailsContainer}>
                    <View>  
                        <View style={styles.trailDetails}>
                            <Text style={styles.detailsHeader}>Favorite</Text>
                        </View>
                        { 
                            !this.isFavorited(name) &&
                                <Icon type='ionicon' onPress={() => this.updateFavoriteTrail(this.props.navigation.state.params, name)} name='ios-star-outline' size={30}/>
                        }
                        {
                            this.isFavorited(name) &&
                                <Icon type='entypo' color='yellow' onPress={() => this.updateFavoriteTrail(this.props.navigation.state.params, name)} name='star' size={30}/>
                        }
                    </View>
                    <View>
                        <View style={styles.trailDetails}>
                            <Text style={styles.detailsHeader}>Trail Completed</Text>
                        </View>
                        <Icon type='ionicon' color='red' name='ios-checkmark-circle-outline' size={30}/>
                    </View>
                </View>
                <Text style={styles.trailSummary}>
                    <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: '10%'}}>Overview {"\n"}</Text>
                    <Text>{summary}</Text>
                </Text>
                <Text style={styles.trailConditions}>Trail Conditions: {conditionDetails}</Text>
                <Text style={styles.trailConditions}>Status: {conditionStatus}</Text>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                    <TouchableOpacity style={styles.buttonDirections} onPress={() => this.mapDirections()}>
                        <Text style={styles.directionText}>
                            Get Directions
                        </Text>
                    </TouchableOpacity>
                </View>
                <Popup
                    isVisible={this.state.isVisible}
                    onCancelPressed={() => this.setState({ isVisible: false })}
                    onAppPressed={() => this.setState({ isVisible: false })}
                    onBackButtonPressed={() => this.setState({ isVisible: false })}
                    modalProps={{ 
                        animationIn: 'slideInUp'
                    }}
                    options={{
                        latitude: latitude,
                        longitude: longitude,
                        sourceLatitude: this.props.userLocation.coords.latitude, 
                        sourceLongitude: this.props.userLocation.coords.longitude, 
                        dialogTitle: 'Open in Maps', 
                        dialogMessage: 'What app would you like to use?', 
                        cancelText: 'Cancel', 
                    }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },

    trailImage: {
        width: '100%',
        height: 250,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },

    trailDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center' ,
        marginTop: '3%',
    },

    trailDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        marginRight: '5%'
    },

    detailsHeader: {
        marginLeft: '4%'
    },

    trailSummary: {
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%'
    },

    trailConditions: {
        marginTop: '3%',
        marginLeft: '4%',
    },

    trailName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        marginTop: '2%'
    },

    buttonDirections: {
        height: 50,
        width: '92%',
        // backgroundColor: '#0000FF',
        backgroundColor: '#4a80f5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8
    },

    directionText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '500',
    }

});

const mapStateToProps = state => {
    return { userLocation: state.userLocation, user: state.currUser }
}

export default connect(mapStateToProps, { addFavoriteTrail, fetchFavoriteTrails, deleteFavoriteTrail })(TrailScreen);
