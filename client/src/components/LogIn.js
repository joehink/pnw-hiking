import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { logIn } from '../actions';

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            validationError: ''
        }
    }

    validate() {
        if (!this.state.email || !this.state.password) {
            this.setState({
                validationError: 'Please fill out all of the fields listed below.'
            })
            return false;
        } else if (!this.state.email.includes('@')) {
            this.setState({
                validationError: 'Please provide a valid email address.'
            })
            return false;
        } else if (this.state.password.length < 6) {
            this.setState({
                validationError: 'Password must be at least 6 characters.'
            })
            return false;
        } else { 
            this.setState({
                validationError: ''
            })
            return true;
        }
    }

    logIn() {
        let validated = this.validate();
        if (validated) {
            this.props.logIn(this.state.email, this.state.password)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                { this.state.validationError &&
                    <FormValidationMessage>{ this.state.validationError }</FormValidationMessage>
                }
                <FormLabel>Email</FormLabel>
                <FormInput value={ this.state.email } onChangeText={ (input) => this.setState({email: input})} placeholder="Email address..." />
                <FormLabel>Password</FormLabel>
                <FormInput value={ this.state.password } onChangeText={ (input) => this.setState({password: input})} secureTextEntry placeholder="Password..." />
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

export default connect(null, { logIn })(LogIn);
