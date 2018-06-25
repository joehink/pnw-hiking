import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Button from './reusable/Button';
import firebase from '../firebase';
import LogInRedirect from './navigation/LogInRedirect';
import { connect } from 'react-redux';
import  { signOutUser } from '../actions';


class ProfileScreen extends React.Component {
    signOut() {
        this.props.signOutUser(this.props.navigation);
    }

    renderProfile() {
        // if (this.props.user && this.props.user.fetching) {
        //     return <ActivityIndicator style={{ flex: 1 }} />
        // }
        console.log(this.props);
        if (this.props.user && this.props.user.user) {
            return <TouchableOpacity style={styles.buttonLogIn} onPress={() => this.signOut()}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
        } else {
            return <LogInRedirect />
        }
    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus', (o) => {
            this.setState({});
        });
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderProfile()}
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
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const mapStateToProps = state => {
    console.log(state);
    return { user: state.currUser }
}

export default connect(mapStateToProps, { signOutUser })(ProfileScreen);
