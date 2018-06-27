import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ children, onPress }) => (
    <View style={styles.logInContainer}> 
        <TouchableOpacity 
            onPress={onPress}
            style={ styles.buttonLogIn }   
        >
            <Text style={styles.buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    buttonLogIn: {
        backgroundColor: '#2cb42c',
        width: '84%',
        borderRadius: 60,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    logInContainer: {
        marginTop: '5%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '14%'
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 16
    }
});

export { Button };
