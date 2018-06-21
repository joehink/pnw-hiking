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
                <FormInput placeholder="Email address..." />
                {/* <FormValidationMessage>Error message</FormValidationMessage> */}
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry placeholder="Password..." />
                {/* <FormValidationMessage>Error message</FormValidationMessage> */}
                <View style={styles.logInContainer}> 
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.logIn()}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Log in with Email
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center', marginTop: '5%'}}>
                    Don't have an account yet?
                    <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("SignUp")}> Sign Up</Text>
                </Text>
                <View style={styles.logInContainer}> 
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.props.navigation.navigate("SignedOutApp")}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Proceed without logging in
                        </Text>
                    </TouchableOpacity>
                </View>
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
        borderRadius: 8,
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
