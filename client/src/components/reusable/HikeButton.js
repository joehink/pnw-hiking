import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const HikeButton = ({ onPress }) => {
    const { buttonHike, buttonHikeText } = styles;
    return (
        <TouchableOpacity style={buttonHike} onPress={onPress} >
            <Text style={buttonHikeText}>
                Hike
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    }
});

export default HikeButton;
