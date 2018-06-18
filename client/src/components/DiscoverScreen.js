import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { findHikes, searchRadiusChange, setUserLocation } from '../actions/index';
import { Slider } from 'react-native-elements';

class DiscoverScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.props.setUserLocation(position)
            // this.props.navigation.navigate('Results', position);
        }, err => console.log(err));
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonHike} >
                    <Text style={styles.buttonHikeText}>
                        Hike
                    </Text>
                </TouchableOpacity>
                <Slider
                    // animateTransitions={true}
                    minimumValue={1}
                    maximumValue={200}
                    thumbTintColor={'black'}
                    step={1}
                    style={styles.sliderHike}
                    value={this.props.searchRadius}
                    onValueChange={value => this.props.searchRadiusChange(value)} />
                <Text>How Far Away: {this.props.searchRadius} miles</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        backgroundColor: '#fff',
    },

    buttonHike: {
        margin: 'auto',
        height: 200,
        width: 200,
        borderRadius: 300,
        borderWidth: 2,
        borderColor: '#CFB53B',
        backgroundColor: '#2cb42c',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: '10%',
        shadowOpacity: .75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {  width: 3,  height: 3,  }
    },

    buttonHikeText: {
        fontFamily: 'Avenir',
        fontSize: 60,
        fontWeight: '300',
        marginTop: '10%',
        color: '#fff'
    },

    sliderHike: {
        width: '70%',

    }
});

const mapStateToProps = state => {
    console.log(state);
    return { searchRadius: state.searchRadius }
}

export default connect(mapStateToProps, { findHikes, searchRadiusChange, setUserLocation })(DiscoverScreen);