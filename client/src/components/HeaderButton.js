import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { signOutUser } from '../actions';

class HeaderButton extends Component {
    renderButton() {
        if (this.props.user.user) {
            return (
                <TouchableOpacity onPress={() => this.props.signOutUser(this.props.navigation)}>
                    <Text style={styles.buttonStyle} >
                        Log Out
                    </Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }
    render() {
        return this.renderButton()
    }
}

const styles = {
    buttonStyle: {
        paddingRight: 15,
        color: 'white',
        fontWeight: 'bold'
    }
}

const mapStateToProps = state => {
    return { user: state.currUser }
}

export default connect(mapStateToProps, { signOutUser })(HeaderButton);
