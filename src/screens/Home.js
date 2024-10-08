import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Btn from '../components/Btn'
import globalStyles from '../styles/globalStyles'
import { acolors } from '../constants/colors'
import Header from '../components/Header'

const features = ['Corporate Transportation', 'Airport Pick Up/ Drop Off', 'Atlanta City Tours', 'Available 24 hours a Day']

const imgs = [require('../assets/imgs/1.jpg'), require('../assets/imgs/2.jpg'), require('../assets/imgs/3.png')]

export default function Home({ navigation }) {
    const [current, setCurrent] = useState(1)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent(prev => {
                if (prev === 1) {
                    return 2;
                } else if (prev === 2) {
                    return 0;
                } else {
                    return 1;
                }
            });
        }, 2000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    return (
        <SafeAreaView style={globalStyles.safeView}>
            <StatusBar
                backgroundColor='#ffffff'
            />
            <View style={globalStyles.container} >
                <ScrollView style={globalStyles.mainContent}>
                    <Header navigation={navigation} />
                    <Image
                        source={imgs[current]}
                        style={styles.imgSlider}
                    />
                    <Text style={globalStyles.heading1}>
                        Atlanta Area Transportation Services
                    </Text>
                    <View style={styles.featuresBox} >
                        {features && features.length > 0 &&
                            features.map(e => (
                                <Text
                                    style={styles.featureStyle}
                                    key={e}>
                                    {e}
                                </Text>
                            ))
                        }
                    </View>
                    <View style={styles.card} >
                        <Image source={require('../assets/imgs/about.jpg')}
                            style={styles.img}
                        />
                        <View style={styles.cardContent}>
                            <Text style={globalStyles.heading1}>About Us</Text>
                            <Text style={globalStyles.text}>ALPHARETTA TO AIRPORT car service  is the very definition of professional transportation for all your needs in Atlanta Metro, Midtown, Downtown, Buckhead, Airport & North Atlanta areas.</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('AboutUs')}
                            >
                                <Text style={styles.linkText} >Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card} >
                        <Image source={require('../assets/imgs/services.jpg')}
                            style={styles.img}
                        />
                        <View style={styles.cardContent}>
                            <Text style={globalStyles.heading1}>Services</Text>
                            <Text style={globalStyles.text}>ALPHARETTA TO AIRPORT taxi and town car services accommodate all public and private airports in Atlanta including Hartsfield-Jackson International Airport. Corporate Transportation</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Services')}
                            >
                                <Text style={styles.linkText} >Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card} >
                        <Image source={require('../assets/imgs/rates.jpg')}
                            style={styles.img}
                        />
                        <View style={styles.cardContent}>
                            <Text style={globalStyles.heading1}>Rates</Text>
                            <Text style={globalStyles.text}>Flat rates provided are for regular sedans. Flat rates provided for time calls have (5) minutes courtesy wait time additional charges may apply if driver has to wait any longer than time requested.</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Rates')}
                            >
                                <Text style={styles.linkText} >Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 50 }} />
                </ScrollView>

                <View style={globalStyles.bottomBtnBox}>
                    <Btn
                        onPress={() => navigation.navigate('Reservation')}
                    >Make a Reservation</Btn>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    car: {
        width: '100%',
        height: 240,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    imgSlider: {
        width: '100%',
        height: 240,
        borderRadius: 10,
        marginBottom: 10,
    },
    featuresBox: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    featureStyle: {
        fontSize: 14,
        color: acolors.textColor,
        marginBottom: 5,
        width: '49%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginBottom: 10,
    },
    card: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
    },
    img: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContent: {
        padding: 10,
    },
    linkText: {
        color: acolors.primary,
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: '700'
    }

})