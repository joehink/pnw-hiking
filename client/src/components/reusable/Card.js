import React from 'react';
import { StyleSheet, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    }
})

export { Card };