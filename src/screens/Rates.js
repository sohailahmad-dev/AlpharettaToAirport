import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../styles/globalStyles'
import Header from '../components/Header'
import { acolors } from '../constants/colors'
import Btn from '../components/Btn'

export default function Rates({ navigation }) {
    const rates = [
        {
            location: 'Buckhead',
            rate: '$75+',
        },
        {
            location: 'Midtown / Downtown',
            rate: '$75+',
        },
        {
            location: 'Dunwoody',
            rate: '$80+',
        },
        {
            location: 'Sandy Springs',
            rate: '$80+',
        },
        {
            location: 'Roswell',
            rate: '$105+',
        },
        {
            location: 'Alpharetta',
            rate: '$110+',
        },
        {
            location: 'Lawrenceville',
            rate: '$120+',
        },
        {
            location: 'Suwanee',
            rate: '$120+',
        },
        {
            location: 'Cumming',
            rate: '$120+',
        },
        {
            location: 'Milton',
            rate: '$130+',
        },
    ]

    return (
        <SafeAreaView style={globalStyles.safeView}>
            <View style={globalStyles.container} >
                <ScrollView style={globalStyles.mainContent}>
                    <Header navigation={navigation} />

                    <Text style={globalStyles.heading1}>
                        Rates
                    </Text>
                    <Text style={[globalStyles.heading1, { color: acolors.textColor }]}>
                        Charters start at $85/hr+
                    </Text>
                    <View style={[styles.rateItem, { borderTopWidth: 1 }]}>
                        <View style={styles.rateItemLeft}>
                            <Text style={[globalStyles.text, styles.heading]}>Location</Text>
                        </View>
                        <View style={styles.rateItemRight}>
                            <Text style={[globalStyles.text, styles.heading]}>Rate</Text>
                        </View>
                    </View>
                    {rates.map(e => (
                        <View
                            key={e?.location}
                            style={styles.rateItem}>
                            <View style={styles.rateItemLeft}>
                                <Text style={globalStyles.text} >{e?.location}</Text>
                            </View>
                            <View style={styles.rateItemRight}>
                                <Text style={globalStyles.text} >{e?.rate}</Text>
                            </View>
                        </View>
                    ))}
                    <View style={{ gap: 10 }}>
                        <View style={{ gap: 3 }}>
                            <Text style={[globalStyles.text, { marginTop: 10, marginBottom: 10 }]}>
                                Flat rates provided are for regular sedans.
                            </Text>
                            <Text style={globalStyles.text}>
                                SUV or Vans add an additional $25.
                            </Text>
                            <Text style={globalStyles.text}>
                                Flat rates provided are for non stop pick and drop from point A to point B.
                            </Text>
                            <Text style={[globalStyles.text, { marginBottom: 10 }]}>
                                Each additional stop add another $20.
                            </Text>
                            <Text style={[globalStyles.text, { marginBottom: 10 }]}>
                                Flat rates provided for time calls have (5) minutes courtesy wait time additional charges may apply if driver has to wait any longer than time requested.
                            </Text>
                            <Text style={globalStyles.text}>
                                Flat rates include all taxes and EXCLUDES gratuity.
                            </Text>
                        </View>
                        <Text style={globalStyles.text}>Call us at
                            <Text style={[globalStyles.text, { fontWeight: '700', marginLeft: 5, }]}> (678) 620-9444</Text>
                        </Text>
                    </View>
                    <View style={{ height: 50 }} />
                </ScrollView>
                <View style={globalStyles.bottomBtnBox}>
                    <Btn
                        onPress={() => navigation.navigate('Reservation')}
                    >Make a Reservation</Btn>
                </View>
            </View >

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: '700',
        fontSize: 16
    },
    imgHero: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    ratesBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    rateItem: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'lightgray',
        flexDirection: 'row',
        borderTopWidth: 0,
    },
    rateItemLeft: {
        flex: 2,
        borderEndColor: 'lightgray',
        borderEndWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    rateItemRight: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
    }

})