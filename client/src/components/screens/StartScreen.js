import React, { Component } from 'react';
import { ActivityIndicator, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { getCurrUser } from '../../actions';

class StartScreen extends Component {
    componentDidMount() {
        this.props.getCurrUser(this.props.navigation)
    }
    render() {
        return <ActivityIndicator style={{ flex: 1 }} />
    }
}

export default connect(null, { getCurrUser })(StartScreen);
