import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

class LogInRedirect extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Sign up or log in to access this content</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate('LogIn')}
                    title="Log in"
                    rounded
                    backgroundColor="#2cb42c"
                    buttonStyle={{ width: 200 }}
                    containerViewStyle={{ margin: 25 }}
                />
            </View>
        );
    }
}

export default withNavigation(LogInRedirect);
