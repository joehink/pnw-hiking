import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from './reusable';
import { FormInput, FormValidationMessage, Icon, Button } from 'react-native-elements';
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

    componentDidMount() {
        this.emailInput.focus();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity style={{zIndex: 1000, position: 'absolute', top: 50, left: 15}} onPress={() => this.props.navigation.navigate('MainApp')}>
                    <Icon type='feather' name='x' size={30}/>
                </TouchableOpacity>
                <Card style={{ alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'Righteous', fontSize: 70, marginBottom: 20, marginTop: 100 }}>Go Hike</Text>
                    {
                        !!this.props.user  && !!this.props.user.error &&
                        <FormValidationMessage labelStyle={{textAlign: 'center'}}>{ this.props.user.error }</FormValidationMessage>
                    }
                    { !!this.state.validationError &&
                        <FormValidationMessage labelStyle={{textAlign: 'center'}}>{this.state.validationError}</FormValidationMessage>
                    }
                    <FormInput 
                        autoCapitalize = 'none' 
                        ref={input => this.emailInput = input} 
                        inputStyle={{fontSize: 16, width: '100%'}} 
                        containerStyle={{paddingTop: '2.5%', width: '75%'}} 
                        value={ this.state.email} textAlign='center' 
                        onChangeText={ (input) => this.setState({email: input})} 
                        placeholder="Email" 
                    />
                    <FormInput 
                        autoCapitalize = 'none' 
                        inputStyle={{fontSize: 16, width: '100%'}} 
                        containerStyle={{paddingTop: '2.5%', width: '75%'}} 
                        value={ this.state.password } 
                        textAlign='center' 
                        onChangeText={ (input) => this.setState({password: input})} 
                        secureTextEntry placeholder="Password" 
                    />
                    <Button 
                        onPress={() => this.logIn()}
                        title="Login with Email"
                        rounded
                        backgroundColor="#06AA5B"
                        buttonStyle={{ width: 200 }}
                        loading={this.props.user.authorizing}
                        containerViewStyle={{ margin: 25 }}
                    />
                    <Text style={{textAlign: 'center'}}>
                        Don't have an account yet?
                        <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("SignUp")}> Sign Up</Text>
                    </Text>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.currUser }
}

export default connect(mapStateToProps, { logIn })(LogIn);
