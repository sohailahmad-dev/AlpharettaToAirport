import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../styles/globalStyles'
import Header from '../components/Header'

export default function AboutUs({ navigation }) {

    return (
        <SafeAreaView style={globalStyles.safeView}>
            <View style={globalStyles.container} >
                <ScrollView style={globalStyles.mainContent}>
                    <Header navigation={navigation} />
                    <Image
                        source={require('../assets/imgs/img.jpg')}
                        style={styles.imgHero}
                    />

                    <View style={{ gap: 10 }}>
                        <Text style={globalStyles.text}>
                            <Text style={[globalStyles.text, { fontWeight: '700' }]}>
                                ALPHARETTA TO AIRPORT LLC
                            </Text> car service is the very definition of professional transportation for all your needs in Atlanta Metro, Midtown, Downtown, Buckhead, Airport & North Atlanta areas. We are Atlanta’s premier business class airport transportation fleet with dedicated and superior staff that will ensure you get the ride you deserve.
                        </Text>
                        <Text style={globalStyles.text}>
                            <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}>ALPHARETTA TO AIRPORT LLC</Text> is a company committed to the safe, comfortable, and professional service that our clients would expect from their transportation provider.
                        </Text>
                        <Text style={globalStyles.text}>
                            Based in the Atlanta, Georgia, we are licensed to operate throughout the state of Georgia. Our drivers and passengers are fully insured beyond standard requirements.
                        </Text>
                        <Text style={globalStyles.text}>We invite you to try our service and compare our prices, particularly against standard taxi or rental rates.
                        </Text>
                        <Text style={globalStyles.text}>
                            We are confident that you will appreciate the savings in dollars and time.
                        </Text>

                        <Text style={globalStyles.text}>
                            CALL US at
                            <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}> (678) 620-9444 </Text> for more information or to make a reservation today.
                        </Text>

                    </View>


                    <View style={{ height: 50 }} />
                </ScrollView>
                <View style={globalStyles.bottomBtnBox}>
                    <Btn
                        onPress={() => navigation.navigate('Reservation')}
                    >Online Booking</Btn>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgHero: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
})