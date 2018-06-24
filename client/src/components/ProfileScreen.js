import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


class ProfileScreen extends React.Component {
    constructor(props) {
        super(props) 
        this.props.navigation.addListener('didFocus', (o) => {
            this.setState({});
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
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
});

export default ProfileScreen;
