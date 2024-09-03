import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import Input from '../components/Input'
import Header from '../components/Header'
import SelectPopup from '../components/SelectPopup'
import Loader from '../components/Loader'
import emailjs from '@emailjs/react-native';



const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dates = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

const durations = ["Transfer", "1 hr", "2 hrs", "3 hrs", "4 hrs", "5 hrs", "6 hrs", "7 hrs", "8 hrs", "9 hrs", "10 hrs", "11 hrs", "12 hrs", "13 hrs", "14 hrs", "15 hrs", "16 hrs", "17 hrs", "18 hrs", "19 hrs", "20 hrs", "21 hrs", "22 hrs", "23 hrs", "24 hrs", "25 hrs", "26 hrs", "27 hrs", "28 hrs", "29 hrs", "30 hrs", "31 hrs", "32 hrs", "33 hrs", "34 hrs", "35 hrs", "36 hrs", "37 hrs", "38 hrs", "39 hrs", "40 hrs", "41 hrs", "42 hrs", "43 hrs", "44 hrs", "45 hrs", "46 hrs", "47 hrs", "48 hrs", "49 hrs", "50 hrs", "51 hrs", "52 hrs", "53 hrs", "54 hrs", "55 hrs", "56 hrs", "57 hrs", "58 hrs", "59 hrs", "60 hrs", "61 hrs", "62 hrs", "63 hrs", "64 hrs", "65 hrs", "66 hrs", "67 hrs", "68 hrs", "69 hrs", "70 hrs", "71 hrs", "72 hrs"]

const stops = ['No Stops', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const passengers = Array.from({ length: 100 }, (_, i) => i + 1);


export default function Reservation({ navigation }) {
    let [dataObj, setDataObj] = useState({});
    let [loading, setLoading] = useState(false);


    const handleData = (key, value) => {
        dataObj[key] = value;
        setDataObj({ ...dataObj });
    }

    const resetScreen = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
        });
    }


    const handleSubmit = () => {
        console.log(dataObj)

        setLoading(true)

        const { pickupMonth, pickupDay, pickupYear, pickupHours, pickupMinutes, pickupPeriod, pickupLocation, dropOffLocation, roundTrip, airlineName, flightNo, destinationCity, duration, preferredVehicle, noOfStops, noOfPassengers, name, email, phoneNumber, quoteOnly } = dataObj;

        if (pickupMonth && pickupDay && pickupYear && pickupHours && pickupMinutes && pickupPeriod && pickupLocation && dropOffLocation && roundTrip && duration && preferredVehicle && noOfStops && noOfPassengers && name && email && phoneNumber && quoteOnly) {

            emailjs
                .send('service_x7gb8w8', 'template_a9ehpbn', dataObj, {
                    publicKey: 'V8SrExrLSXj2UXg9V',
                })
                .then(
                    (response) => {
                        Alert.alert(
                            'Success',
                            'Thank you! Your Reservation request has been successfully submitted.  A member of our staff will contact you immediately to confirm your reservation.',
                            [
                                {
                                    text: "OK",
                                    onPress: () => resetScreen()
                                }
                            ]
                        );
                        console.log('SUCCESS!', response.status, response.text);
                        setDataObj({});
                        setLoading(false);
                    },
                    (err) => {
                        Alert.alert('Submission Failed', "We're sorry, but there was an issue submitting your Reservation request. Please try again later.");
                        console.log('FAILED...', err);
                        setLoading(false)
                    },
                );

        } else {
            Alert.alert('Error', 'Required fields are missing.');
            setLoading(false)

        }
    }

    return (
        <SafeAreaView style={globalStyles.safeView}>
            <View style={globalStyles.container} >
                <ScrollView style={globalStyles.mainContent}>
                    <Header navigation={navigation} />
                    <Text style={[globalStyles.heading1, globalStyles.center]}>
                        Online Reservation Request
                    </Text>
                    <Text style={[globalStyles.text, { textAlign: 'center', marginBottom: 20 }]}>
                        To begin your reservation please fill out the form below.
                    </Text>
                    <View style={styles.box}>
                        <SelectPopup
                            label='Pickup Date'
                            placeholder='Month'
                            options={months}
                            style={{ flex: 1 }}
                            onSelect={(e) => handleData('pickupMonth', e)}

                        />
                        <SelectPopup
                            placeholder='Day'
                            style={{ flex: 1 }}
                            options={dates}
                            onSelect={(e) => handleData('pickupDay', e)}

                        />
                        <Input
                            placeHolder='Year'
                            onChangeText={(e) => handleData('pickupYear', e)}
                            containerStyle={{ flex: 1 }}
                            type='numeric'
                        />
                    </View>
                    <View style={styles.box}>
                        <SelectPopup
                            label='Pickup Time'
                            placeholder='Hours'
                            options={hours}
                            style={{ flex: 1 }}
                            onSelect={(e) => handleData('pickupHours', e)}
                        />
                        <SelectPopup
                            placeholder='Minutes'
                            style={{ flex: 1 }}
                            options={minutes}
                            onSelect={(e) => handleData('pickupMinutes', e)}

                        />
                        <SelectPopup
                            placeholder='AM/PM'
                            style={{ flex: 1 }}
                            options={['AM', 'PM']}
                            onSelect={(e) => handleData('pickupPeriod', e)}
                        />

                    </View>
                    <Input
                        label='Pickup Location'
                        onChangeText={(e) => handleData('pickupLocation', e)}
                    />
                    <Input
                        label='Drop Off  Location'
                        onChangeText={(e) => handleData('dropOffLocation', e)}

                    />
                    <SelectPopup
                        label='Do you need a round trip'
                        placeholder='Yes/No'
                        options={['Yes', 'No']}
                        onSelect={(e) => handleData('roundTrip', e)}
                    />

                    <Text style={[globalStyles.heading1, globalStyles.center, { marginTop: 30, marginBottom: 20 }]}>
                        Flight Information (Optional)
                    </Text>

                    <Input
                        label='Flight No.'
                        onChangeText={(e) => handleData('flightNo', e)}
                    />
                    <Input
                        label='Airline Name'
                        onChangeText={(e) => handleData('airlineName', e)}
                    />
                    <Input
                        label='Departure City'
                        onChangeText={(e) => handleData('destinationCity', e)}
                    />

                    <Text style={[globalStyles.heading1, globalStyles.center, { marginTop: 30, marginBottom: 20 }]}>
                        Other Details
                    </Text>

                    <SelectPopup
                        label='Duration Car Needed'
                        options={durations}
                        defaultValue='Transfer'
                        onSelect={(e) => handleData('duration', e)}
                    />
                    <SelectPopup
                        label='Preferred Vehicle Type'
                        options={['No Preference', 'Sedan/Town Car', 'SUV']}
                        defaultValue='No Preference'
                        onSelect={(e) => handleData('preferredVehicle', e)}
                    />

                    <SelectPopup
                        label='No. of Stops'
                        options={stops}
                        defaultValue='No Stops'
                        onSelect={(e) => handleData('noOfStops', e)}
                    />

                    <SelectPopup
                        label='No. of Passengers'
                        options={passengers}
                        onSelect={(e) => handleData('noOfPassengers', e)}
                    />

                    <Text style={[globalStyles.heading1, globalStyles.center, { marginTop: 30, marginBottom: 20 }]}>
                        Passenger Information
                    </Text>

                    <Input
                        label='Full Name'
                        onChangeText={(e) => handleData('name', e)}
                    />
                    <Input
                        label='Email'
                        placeHolder='example@gmail.com'
                        onChangeText={(e) => handleData('email', e)}
                    />

                    <Input
                        label='Phone Number'
                        placeHolder='(000) 000-0000'
                        onChangeText={(e) => handleData('phoneNumber', e)}
                    />

                    <SelectPopup
                        label='Quote Only?'
                        placeholder='Yes/No'
                        options={['Yes', 'No']}
                        onSelect={(e) => handleData('quoteOnly', e)}
                    />


                    {/* <Text style={[globalStyles.text, { textAlign: 'center', marginTop: 15, }]}>
                        A member of our staff will contact you immediately to confirm your reservation.
                    </Text> */}



                    <View style={{ height: 50 }} />
                </ScrollView>
                <View style={globalStyles.bottomBtnBox}>
                    <Btn
                        onPress={handleSubmit}
                    >Submit</Btn>
                </View>
            </View>
            <Loader isShow={loading} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'flex-end'
    }
})