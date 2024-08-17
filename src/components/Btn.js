import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { acolors } from '../constants/colors'

export default Btn = ({ onPress, children, style }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, { ...style }]}
            onPress={onPress}
        >
            <Text style={styles.btnTitle}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 45,
        borderRadius: 10,
        backgroundColor: acolors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
        fontFamily: 'Gilroy-Bold',
        fontSize: 16,
        fontWeight: '700'
    },

})