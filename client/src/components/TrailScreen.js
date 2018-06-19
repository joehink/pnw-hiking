import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import openMap from 'react-native-open-maps';

class TrailScreen extends React.Component {

    getDirections = () => {
        openMap({ latitude: this.props.navigation.state.params.latitude, longitude: this.props.navigation.state.params.longitude });
    }

    render() {
        console.log(this.props);
        const { ascent, conditionDetails, conditionStatus, difficulty, imgMedium, location, 
                    latitude, longitude, summary, name, length } = this.props.navigation.state.params;
        console.log(imgMedium);
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
                <Text style={styles.trailSummary}>
                    <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: '10%'}}>Overview {"\n"}</Text>
                    <Text>{summary}</Text>
                </Text>
                <Text style={styles.trailConditions}>Trail Conditions: {conditionDetails}</Text>
                <Text style={styles.trailConditions}>Status: {conditionStatus}</Text>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                    <TouchableOpacity style={styles.buttonDirections} onPress={() => this.getDirections()}>
                        <Text style={styles.directionText}>
                            Get Directions
                        </Text>
                    </TouchableOpacity>
                </View>
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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },

    directionText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '500',
    }

});

export default TrailScreen;
