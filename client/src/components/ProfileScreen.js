import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Button from './reusable/Button';
import firebase from '../firebase';


class ProfileScreen extends React.Component {
    signOut() {
        firebase.auth().signOut()
        .then(() => {
            this.props.navigation.navigate('SignUp');
        })
    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus', (o) => {
            this.setState({});
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.signOut()}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                        Log Out
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
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
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
});

export default ProfileScreen;
