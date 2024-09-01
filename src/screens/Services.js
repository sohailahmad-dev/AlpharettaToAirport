import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../styles/globalStyles'
import Header from '../components/Header'

export default function Services({ navigation }) {

    return (
        <SafeAreaView style={globalStyles.safeView}>
            <View style={globalStyles.container} >
                <ScrollView style={globalStyles.mainContent}>
                    <Header navigation={navigation} />
                    <Image
                        source={require('../assets/imgs/img4.jpg')}
                        style={styles.imgHero}
                    />
                    <Text style={globalStyles.heading1}>
                        Airport Transportation
                    </Text>
                    <View style={{ gap: 10 }}>
                        <Text style={globalStyles.text}>
                            <Text style={[globalStyles.text, { fontWeight: '700' }]}>
                                ALPHARETTA TO AIRPORT LLC
                            </Text> taxi and town car services accommodate all public and private airports in Atlanta including Hartsfield-Jackson International Airport. <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}>
                                ALPHARETTA TO AIRPORT LLC
                            </Text> provides a service for all clients, both personal and corporate, reducing the frustration of loading your own bags, driving in congested traffic, and having to pay for parking.
                        </Text>
                        <Text style={globalStyles.text}>
                            <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}>Curbside Airport Pickup: ALPHARETTA TO AIRPORT LLC</Text> drivers are always ready for your reservation so please give our dispatch a call with your name and the Gate number you are arriving to. Our chauffeur can pick you up from the Gate for your convenience, and load your bags into the towncar or SUV.
                        </Text>
                        <Text style={globalStyles.text}>
                            <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}>Meet & Greet service: </Text> Arriving passengers are met in the baggage claim area of the airport, where our drivers will be holding a sign with the client’s name and/or company name displayed.
                        </Text>
                    </View>

                    <Text style={[globalStyles.heading1, { marginTop: 10, }]}>
                        Corporate Accounts
                    </Text>
                    <View style={{ gap: 10 }}>
                        <Text style={globalStyles.text}>
                            <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}>ALPHARETTA TO AIRPORT LLC</Text> welcomes personal, corporate and business accounts.
                        </Text>
                        <Text style={globalStyles.text}>
                            We have a great history of providing executive transportation solutions for corporate personnel. We will work with your travel department to make sure your business/corporate travelers obtain exceptional service.
                        </Text>
                        <Text style={globalStyles.text}>
                            All of our experienced staff and courteous drivers provide comfortable travel accommodations for you and your business associates. Along with our matchless town car service, we offer our regular business clients discounts and customized billing options upon opening personal or corporate accounts.
                        </Text>
                        <Text style={globalStyles.text}>
                            We have developed a trustworthy Atlanta ground transportation service that strives to deliver first class service at all times. Whether in business or private gatherings, your guests will experience personalized and matchless service while using our fleet.
                        </Text>
                    </View>


                    <View style={{ height: 50 }} />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgHero: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
})