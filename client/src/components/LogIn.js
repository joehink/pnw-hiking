import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Icon } from 'react-native-elements';
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

    buttonPress() {
        console.log("hello");
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* <View style={{}}> */}
                    <Icon containerStyle={{zIndex: 1000, position: 'absolute', top: 50, left: 15}} type='feather' onPress={() => this.props.navigation.navigate('MainApp')} name='x' size={30}/>
                {/* </View> */}
                <View style={styles.container}>
                    <Image
                        style={{marginBottom: '13%', width: '100%', height: 115}}
                        source={require('../images/goHike.png')}
                    />
                    { this.state.validationError &&
                        <FormValidationMessage>{this.state.validationError}</FormValidationMessage>
                    }
                    <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '1%', paddingBottom: '2%', width: '75%'}} value={ this.state.email} textAlign='center' onChangeText={ (input) => this.setState({email: input})} placeholder="Email" />
                    <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '7%', paddingBottom: '2%', width: '75%'}} value={ this.state.password } textAlign='center' onChangeText={ (input) => this.setState({password: input})} secureTextEntry placeholder="Password" />
                    <View style={styles.logInContainer}> 
                        <TouchableOpacity disabled={this.state.email && this.state.password ? false : true}
                                            style={this.state.email && this.state.password ? styles.buttonLogIn : styles.buttonLogInDisabled} onPress={() => this.logIn()}>
                            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                                Log in with Email
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign: 'center'}}>
                        Don't have an account yet?
                        <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("SignUp")}> Sign Up</Text>
                    </Text>
                    {/* <View style={styles.logInContainer}>  */}
                        {/* <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.props.navigation.navigate("SignedOutApp")}>
                            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                                Proceed without logging in
                            </Text>
                        </TouchableOpacity> */}
                    {/* </View> */}
                </View>
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
        backgroundColor: 'rgba(44, 180, 44, .4)',
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

export default connect(null, { logIn })(LogIn);
