import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { signOutUser } from '../actions';

class HeaderButton extends Component {
    renderButton() {
        if (this.props.user.user) {
            return <Text 
                        style={styles.buttonStyle} 
                        onPress={() => this.props.signOutUser(this.props.navigation)}
                    >
                        Log Out
                    </Text>
        } else {
            return <Text></Text>
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
