import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { Slider } from 'react-native-elements';

class DiscoverScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {

    }

    getUserLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.props.navigation.navigate('Results', position);
        }, err => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonHike} onPress={() => this.getUserLocation()} >
                    <Text style={styles.buttonHikeText}>
                        Hike
                    </Text>
                </TouchableOpacity>
                <Slider
                    // animateTransitions={true}
                    minimumValue={1}
                    maximumValue={100}
                    thumbTintColor={'black'}
                    step={1}
                    style={styles.sliderHike}
                    value={this.state.value}
                    onValueChange={(value) => this.setState({value})} />
                <Text>How Far Away: {this.state.value} miles</Text>
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

export default DiscoverScreen;
