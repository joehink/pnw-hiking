import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class LogIn extends React.Component {

    testFunction() {

    }

    logIn() {
        //attempt log in
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={() => this.testFunction()}/>
                <FormValidationMessage>Error message</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={() => this.testFunction()}/>
                <FormValidationMessage>Error message</FormValidationMessage>
                <View style={styles.logInContainer}> 
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.logIn()}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Log in with Email
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center', marginTop: '5%'}}>
                    Don't have an account yet?
                    <Text style={{color: 'blue'}}> Sign Up</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },

    buttonLogIn: {
        backgroundColor: '#2cb42c',
        width: '92%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logInContainer: {
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LogIn;
