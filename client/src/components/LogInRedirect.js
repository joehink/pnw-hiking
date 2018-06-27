import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './reusable';
import { withNavigation } from 'react-navigation';

class LogInRedirect extends React.Component {
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Sign up or log in to access this content</Text>
                <Button onPress={() => this.props.navigation.navigate('LogIn')}>
                    Log in
                </Button>
            </View>
        );
    }
}

export default withNavigation(LogInRedirect);
