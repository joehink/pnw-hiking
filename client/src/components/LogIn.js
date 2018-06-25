import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './reusable/Card';
import Button from './reusable/Button';
import { FormInput, FormValidationMessage, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { logIn } from '../actions';

class LogIn extends Component {
    state = {
        email: '',
        password: '',
        validationError: ''
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
            <View style={{flex: 1}}>
                <Icon containerStyle={{zIndex: 1000, position: 'absolute', top: 50, left: 15}} type='feather' onPress={() => this.props.navigation.navigate('MainApp')} name='x' size={30}/>
                <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{marginBottom: '13%', width: '100%', height: 115}}
                        source={require('../images/goHike.png')}
                    />
                    { this.state.validationError &&
                        <FormValidationMessage>{this.state.validationError}</FormValidationMessage>
                    }
                    <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '1%', paddingBottom: '2%', width: '75%'}} value={ this.state.email} textAlign='center' onChangeText={ (input) => this.setState({email: input})} placeholder="Email" />
                    <FormInput inputStyle={{fontSize: 20, width: '100%'}} containerStyle={{paddingTop: '7%', paddingBottom: '2%', width: '75%'}} value={ this.state.password } textAlign='center' onChangeText={ (input) => this.setState({password: input})} secureTextEntry placeholder="Password" />
                    <Button onPress={() => this.logIn()} >
                        Login with Email
                    </Button>
                    <Text style={{textAlign: 'center'}}>
                        Don't have an account yet?
                        <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("SignUp")}> Sign Up</Text>
                    </Text>
                </Card>
            </View>
        );
    }
}

export default connect(null, { logIn })(LogIn);
