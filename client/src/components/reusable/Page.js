import React from 'react';
import { StyleSheet, View } from 'react-native'

const Page = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    }
})

export { Page };