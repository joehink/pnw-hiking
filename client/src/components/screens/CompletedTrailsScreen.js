import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { Card, TrailList } from '../reusable';
import { connect } from 'react-redux';
import { fetchCompletedTrails, getCurrUser } from '../../actions';
import LogInRedirect from '../LogInRedirect';
import { Page, Section } from '../reusable';


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
            return <ActivityIndicator style={{ flex: 1 }} />
        } else if (user.user && completedTrails.trails.length === 0) {
            return  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>You have not completed any trails yet.</Text>
                    </View>
        } else if (user.user && completedTrails.trails) {
            let stats = this.renderStats(completedTrails.trails);
            return  <View>
                        {stats}
                        <TrailList navigation={navigation} trails={completedTrails.trails}/>
                    </View>
        } else {
            return (
                <LogInRedirect />
            )
        }
    }

    renderStats(trails) {
        let totalDistance = 0;
        let totalAscent = 0;
        for (let i = 0; i < trails.length; i++) {
            totalDistance += trails[i].length;
            totalAscent += trails[i].ascent;
        }
        return  <View>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10}}>Hiking Stats</Text>
                    <Section style={{borderColor: 'black', borderBottomWidth: 1, justifyContent: 'space-around', padding: 20, paddingBottom: 10 }}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                            <Text style={{fontWeight: 'bold'}}>Total Distance</Text>
                            <Text>{Math.round(totalDistance * 1000) / 1000 + ' mi'}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold'}}>Total Ascent</Text>
                            <Text>{totalAscent + ' ft'}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold'}}># of Trails</Text>
                            <Text>{trails.length}</Text>
                        </View>
                    </Section>
                </View>
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
