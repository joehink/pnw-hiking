import React from 'react';
import { StyleSheet, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        backgroundColor: '#fff',
    }
})

export default Card;