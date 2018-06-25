import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class LogInRedirect extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginBottom: '5%'}}>Sign up or log in to access this content</Text>
                <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.props.navigation.navigate('LogIn')}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                        Log In
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    buttonLogIn: {
        backgroundColor: '#2cb42c',
        width: '92%',
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default withNavigation(LogInRedirect);
