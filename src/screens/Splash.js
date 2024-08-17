import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [])
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Image
                    source={require('../assets/imgs/logo.png')}
                    style={styles.logo}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: '100%'
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
        marginTop: -50,
    }
})