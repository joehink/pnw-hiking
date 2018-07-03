import React from 'react';
import { Text, View } from 'react-native';
import { FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { getCurrUser, signUp } from '../actions';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        confPassword: '',
        validationError: ''
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

    componentDidMount() {
        this.emailInput.focus();
    }

    render() {
        return (
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontFamily: 'Righteous', fontSize: 70, marginBottom: 20, marginTop: 100 }}>Go Hike</Text>
                { !!this.state.validationError &&
                    <FormValidationMessage>{ this.state.validationError }</FormValidationMessage>
                }
                <FormInput 
                    autoCapitalize = 'none' 
                    ref={input => this.emailInput = input} 
                    inputStyle={{fontSize: 16, width: '100%'}} 
                    containerStyle={{paddingTop: '2.5%', width: '75%'}} 
                    value={ this.state.email } 
                    textAlign='center' 
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
                    secureTextEntry 
                    placeholder="Password" 
                />
                <FormInput 
                    autoCapitalize = 'none' 
                    inputStyle={{fontSize: 16, width: '100%'}} 
                    containerStyle={{paddingTop: '2.5%', width: '75%'}} 
                    value={ this.state.confPassword } 
                    textAlign='center' 
                    onChangeText={ (input) => this.setState({confPassword: input})} 
                    secureTextEntry 
                    placeholder="Confirm Password" 
                />
                <Button 
                    onPress={() => this.signUp()}
                    title="Sign Up"
                    rounded
                    backgroundColor="#2cb42c"
                    buttonStyle={{ width: 200 }}
                    loading={this.props.user.authorizing}
                    containerViewStyle={{ margin: 25 }}
                />
                <Text style={{textAlign: 'center'}}>
                    Already have an account?
                    <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate("LogIn")}>Log In</Text>
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.currUser }
}

export default connect(mapStateToProps, { getCurrUser, signUp })(SignUp);
