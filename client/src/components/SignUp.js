import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { getCurrUser, signUp } from '../actions';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.props.getCurrUser(this.props.navigation)
        this.state = {
            email: '',
            password: '',
            confPassword: '',
            validationError: ''
        }
    }

    validate() {
        if (!this.state.email || !this.state.password || !this.state.confPassword) {
            this.setState({
                validationError: 'Please fill out all of the fields listed below.'
            })
            return false;
        } else if (!this.state.email.includes('@')) {
            this.setState({
                validationError: 'Please provide a valid email address.'
            })
            return false;
        } else if (this.state.password !== this.state.confPassword) {
            this.setState({
                validationError: 'Passwords do not match.'
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

    signUp() {
        let validated = this.validate();
        if (validated) {
            this.props.signUp(this.state.email, this.state.password)
        }
    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                { this.state.validationError &&
                    <FormValidationMessage>{ this.state.validationError }</FormValidationMessage>
                }
                <FormLabel>Email</FormLabel>
                <FormInput value={ this.state.email } onChangeText={ (input) => this.setState({email: input})} placeholder="Email address..." />
                <FormLabel>Password</FormLabel>
                <FormInput value={ this.state.password } onChangeText={ (input) => this.setState({password: input})} secureTextEntry placeholder="Password..." />
                <FormLabel>Confirm Password</FormLabel>
                <FormInput value={ this.state.confPassword } onChangeText={ (input) => this.setState({confPassword: input})} secureTextEntry placeholder="Confirm Password..." />
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

const mapStateToProps = state => {
    return { user: state.currUser }
}

export default connect(mapStateToProps, { getCurrUser, signUp })(SignUp);
