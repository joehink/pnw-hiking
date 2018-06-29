import React from 'react';
import { Text, View, ScrollView, ImageBackground, ActivityIndicator, LayoutAnimation } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { isTrailInDB, addToDb, removeFromDb, toggle } from '../../actions';
import { Popup } from 'react-native-map-link';
import { Page, Section } from '../reusable';


class TrailScreen extends React.Component {
    state = { isVisible: false }
    constructor(props) {
        super(props);
        if (this.props.user.user) {
            this.props.navigation.addListener('willFocus', () => {
                const trail = this.props.navigation.state.params;
                this.props.isTrailInDB(this.props.user.user.uid, trail, 'favorites', 'Favorited')
                this.props.isTrailInDB(this.props.user.user.uid, trail, 'completed', 'Completed')
            });
        }
    }
    renderActions() {
        const trail = this.props.navigation.state.params;
        const userID = this.props.user.user.uid;
        if (this.props.user.user) {
            return (
                <View style={{alignSelf: 'flex-end', flexDirection: 'row', marginTop: 'auto'}}>
                    <Icon 
                        onPress={() => this.props.trailData.isFavorited ? this.props.removeFromDb(userID, this.props.trailData.favoritedTrail, 'favorites') : this.props.addToDb(userID, trail, 'favorites')}
                        name="favorite" 
                        color={this.props.trailData.isFavorited ? 'red' : 'gray'} 
                        size={20} 
                        reverse 
                        raised
                    />
                    <Icon 
                        onPress={() => this.props.trailData.isCompleted ? this.props.removeFromDb(userID, this.props.trailData.completedTrail, 'completed') : this.props.addToDb(userID, trail, 'completed')}
                        name="check" 
                        color={this.props.trailData.isCompleted ? 'green' : 'gray'} 
                        size={20} 
                        reverse 
                        raised 
                    />
                </View>
            )
        }
    }
    renderTrail() {
        if(!this.props.trailData.loading) {
            const { 
                ascent, 
                conditionDetails, 
                conditionStatus, 
                difficulty, 
                imgMedium, 
                location, 
                latitude, 
                longitude, 
                summary, 
                name, 
                high,
                length 
            } = this.props.navigation.state.params;
            return (
                <Page>
                    <ScrollView>
    
                        <Section style={{ padding: 5, borderColor: '#046A38', borderWidth: 5, borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
                            <ImageBackground source={{uri: imgMedium}} style={{width: '100%', height: 250}}>
                                {this.renderActions()}
                            </ImageBackground>
                        </Section>
    
                        <Section style={{paddingTop: 0}}>
                            <View style={{ flexDirection: 'column'}}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                                <View style={{ flexDirection: 'row', paddingTop: 2.5 }}>
                                    <Icon name="location-on" size={20} />
                                    <Text>{location.length <= 2 ? 'N/A' : location}</Text>
                                </View>
                            </View>
                        </Section>
    
                        <Section style={{ borderColor: 'black', borderTopWidth: 2}}>
                            <Text>{ summary }</Text>
                        </Section>
    
                        <Section style={{ borderColor: 'black', borderTopWidth: 2, justifyContent: 'space-around', padding: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Icon name="directions-walk" size={35}/>
                                <Text>Length</Text>
                                <Text>{length}</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Icon name="thumbs-up-down" size={35}/>
                                <Text>Difficulty</Text>
                                <Text>{difficulty}</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Icon name="trending-up" size={35}/>
                                <Text>Ascent</Text>
                                <Text>{ascent}</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Icon name="filter-hdr" size={35}/>
                                <Text>Highest Pt.</Text>
                                <Text>{high}</Text>
                            </View>
                        </Section>
                        
                        <Button 
                            onPress={() => this.setState({ isVisible: true })}
                            backgroundColor="#4a80f5"
                            title="Get Directions"
                            containerViewStyle={{ margin: 10, }}
                        />
                        <Section style={{ flexDirection: 'column', borderColor: 'black', borderTopWidth: 2, paddingTop: 15 }}>
                            <View style={{ backgroundColor: '#046A38', padding: 10, marginBottom: 10 }}>
                                <Text style={{ padding: 10, borderColor: 'white', borderWidth: 2, color: 'white', textAlign: 'center' }}>
                                    {conditionStatus}
                                </Text>
                            </View>
                            <View style={{ backgroundColor: '#046A38', padding: 10 }}>
                                <Text style={{ padding: 10, borderColor: 'white', borderWidth: 2, color: 'white', textAlign: 'center' }}>
                                    {conditionDetails}
                                </Text>
                            </View>
                        </Section>
    
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
                </Page>
            );
        } else {
            return (
                <ActivityIndicator style={{ flex: 1 }}/>
            )
        }
    }
    render() {
        return this.renderTrail()
    }
}

const mapStateToProps = state => {
    return { 
        userLocation: state.discover.userLocation, 
        user: state.currUser, 
        trailData: state.trail
    }
}

export default connect(mapStateToProps, { isTrailInDB, addToDb, removeFromDb, toggle })(TrailScreen);
