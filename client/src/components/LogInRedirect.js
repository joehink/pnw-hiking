import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

class LogInRedirect extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>Sign up or log in to access this content</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button 
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        title="Sign up"
                        rounded
                        backgroundColor="#06AA5B"
                        containerViewStyle={{ marginTop: 25, width: 115 }}
                    />
                    <Button 
                        onPress={() => this.props.navigation.navigate('LogIn')}
                        title="Log in"
                        rounded
                        backgroundColor="#06AA5B"
                        containerViewStyle={{ marginTop: 25, width: 115 }}
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(LogInRedirect);
