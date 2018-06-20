import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class SignUp extends React.Component {

    testFunction() {

    }

    signUp() {
        //attempt log in
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..." />
                <FormValidationMessage>Error message</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry placeholder="Password..." />
                <FormValidationMessage>Error message</FormValidationMessage>
                <FormLabel>Confirm Password</FormLabel>
                <FormInput secureTextEntry placeholder="Confirm Password..." />
                <FormValidationMessage>Error message</FormValidationMessage>
                <View style={styles.logInContainer}> 
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.signUp()}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center', marginTop: '5%'}}>
                    Already have an account?
                    <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("LogIn")}> Log In</Text>
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

export default SignUp;
