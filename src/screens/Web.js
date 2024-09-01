import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import Header from '../components/Header';
import Loader from '../components/Loader';

export default function Web({ navigation }) {
    const [loading, setLoading] = useState(true); // State to manage loading

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={styles.headerBox}>
                    <Header navigation={navigation} />
                </View>

                <WebView
                    source={{ uri: 'https://checkout.square.site/merchant/E0677G1EMVD6N/checkout/ZYLIITMCXL3PEV63H4EQTJR2' }}
                    style={{ flex: 1 }}
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                />
                {loading && <Loader isShow={loading} />}
            </SafeAreaView >
        </>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
    },
})
