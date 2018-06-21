import React from 'react';
import { View, Text } from 'react-native';

const Error = ({errorMessage, style}) => {
    const { container, errorText } = styles;
    return (
        <View style={[container, style]}>
            <Text style={ errorText }>{errorMessage}</Text>
        </View>
    )
}

const styles = {
    container: {
        padding: 10
    },
    errorText: {
        color: 'red'
    }
}

export default Error;