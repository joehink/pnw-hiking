import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getCurrUser } from '../../actions';

class StartScreen extends Component {
    componentDidMount() {
        this.props.getCurrUser(this.props.navigation)
    }
    render() {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />
    }
}

export default connect(null, { getCurrUser })(StartScreen);
