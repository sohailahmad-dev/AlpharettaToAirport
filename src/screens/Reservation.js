import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import Input from '../components/Input'

const features = ['Corporate Transportation', 'Airport Pick Up/ Drop Off', 'Atlanta City Tours', 'Available 24 hours a Day']

export default function Reservation() {
    return (
        <SafeAreaView style={globalStyles.safeView}>
            <View style={globalStyles.container} >
                <ScrollView style={globalStyles.mainContent}>

                    <Text style={[globalStyles.heading1, globalStyles.center]}>
                        Online Reservation Request
                    </Text>
                    <Text style={[globalStyles.text, { textAlign: 'center', marginBottom: 20 }]}>
                        To begin your reservation please fill out the form below.
                    </Text>
                    <Input
                        label='Pickup Date'
                        placeHolder='MM-DD-YYYY'
                    />
                    <View>
                        <Input
                            label='Pickup Time'
                            placeHolder='HH:MM'
                        />
                    </View>
                    <Input
                        label='Pickup Location'
                        placeHolder=''
                    />
                    <Input
                        label='Drop Off  Location'
                        placeHolder=''
                    />

                    {/* <Text style={[globalStyles.text, { textAlign: 'center', marginTop: 15, }]}>
                        A member of our staff will contact you immediately to confirm your reservation.
                    </Text> */}



                    <View style={{ height: 100 }} />
                </ScrollView>
                <View style={globalStyles.bottomBtnBox}>
                    <Btn>Submit</Btn>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})