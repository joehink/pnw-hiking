import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
        return (
            <View style={styles.container}>
                { this.state.validationError &&
                    <FormValidationMessage>{ this.state.validationError }</FormValidationMessage>
                }
                <Image
                    style={{marginBottom: '13%'}}
                    source={require('../images/goHike.png')}
                />
                <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '2%', paddingBottom: '2%', width: '75%'}} value={ this.state.email} textAlign='center' onChangeText={ (input) => this.setState({email: input})} placeholder="Email" />
                <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '7%', paddingBottom: '2%', width: '75%'}} value={ this.state.password } textAlign='center' onChangeText={ (input) => this.setState({password: input})} secureTextEntry placeholder="Password" />
                <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '7%', paddingBottom: '2%', width: '75%'}} value={ this.state.confPassword } textAlign='center' onChangeText={ (input) => this.setState({confPassword: input})} secureTextEntry placeholder="Confirm Password" />
                <View style={styles.logInContainer}> 
                    <TouchableOpacity disabled={this.state.email && this.state.password && this.state.confPassword ? false : true}
                                    style={this.state.email && this.state.password && this.state.confPassword ? styles.buttonLogIn : styles.buttonLogInDisabled} onPress={() => this.signUp()}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center'}}>
                    Already have an account?
                    <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("LogIn")}> Log In</Text>
                </Text>
                {/* <View style={styles.logInContainer}> 
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.props.navigation.navigate("SignedOutApp")}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Proceed without logging in
                        </Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'rgba(44, 180, 44, .6)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

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

    buttonLogInDisabled: {
        backgroundColor: 'rgba(44, 180, 44, .2)',
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
    }
});

const mapStateToProps = state => {
    return { user: state.currUser }
}

export default connect(mapStateToProps, { getCurrUser, signUp })(SignUp);
