import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import Input from '../components/Input'
import Header from '../components/Header'
import emailjs from '@emailjs/react-native';
import Loader from '../components/Loader'

export default function ContactUs({ navigation }) {
    let [loading, setLoading] = useState(false);
    let [dataObj, setDataObj] = useState({});

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
        setLoading(true)

        const { name, email, subject, message } = dataObj;

        if (name && email && subject && message) {
            emailjs
                .send('service_x7gb8w8', 'template_qz1jisd', dataObj, {
                    publicKey: 'V8SrExrLSXj2UXg9V',
                })
                .then(
                    (response) => {
                        Alert.alert('Success',
                            'Thank you! Your message has been successfully submitted. We will get back to you shortly.',
                            [
                                {
                                    text: "OK",
                                    onPress: () => resetScreen()
                                }
                            ]
                        );
                        console.log('SUCCESS!', response.status, response.text);
                        // setDataObj({});
                        setLoading(false);
                    },
                    (err) => {
                        Alert.alert('Submission Failed', "We're sorry, but there was an issue submitting your message. Please try again later.");
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
                        Contact Us
                    </Text>
                    <Text style={[globalStyles.text, { marginBottom: 20 }]}>
                        Please, don't hesitate to contact us.
                        {'\n'}
                        Call us at <Text style={{ fontWeight: '600' }}> (678) 620-9444 </Text>
                        {'\n'}
                        Email us at <Text style={{ fontWeight: '600' }}>booking@alpharettatoairport.com</Text>
                    </Text>
                    <Input
                        label='Name'
                        value={dataObj.name}
                        onChangeText={(e) => handleData('name', e)}
                    />
                    <Input
                        label='Email'
                        value={dataObj.email}
                        onChangeText={(e) => handleData('email', e)}

                    />
                    <Input
                        label='Subject'
                        value={dataObj.subject}
                        onChangeText={(e) => handleData('subject', e)}
                    />
                    <Input
                        label='Message'
                        value={dataObj.message}
                        onChangeText={(e) => handleData('message', e)}
                        multiline={true}
                        style={{ minHeight: 100 }}
                    />
                    <View style={{ height: 50 }} />
                </ScrollView>
                <View style={globalStyles.bottomBtnBox}>
                    <Btn
                        onPress={handleSubmit}
                    >Submit</Btn>
                </View>
                <Loader isShow={loading} />
            </View>

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