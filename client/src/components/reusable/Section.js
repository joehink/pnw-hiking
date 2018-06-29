import React from 'react';
import { StyleSheet, View } from 'react-native'

const Section = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 0
    }
})

export { Section };