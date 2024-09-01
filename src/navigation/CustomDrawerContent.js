// CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { acolors } from '../constants/colors';

const CustomDrawerContent = ({ navigation, ...props }) => {
    const pages = [
        {
            name: 'Home',
            to: 'Home',
        },
        {
            name: 'Services',
            to: 'Services',
        },
        {
            name: 'Rates',
            to: 'Rates',
        },
        {
            name: 'Reservations',
            to: 'Reservation',
        },
        {
            name: 'Pay Online',
            to: 'Web',
        },
        {
            name: 'About Us',
            to: 'AboutUs'
        },
        {
            name: 'Contact Us',
            to: 'ContactUs',
        },
    ]
    return (
        // <DrawerContentScrollView >
        <View style={styles.main}>
            <View style={styles.upper}>
                <View style={styles.profile}>
                    <TouchableOpacity
                        style={styles.cross}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image source={require('../assets/imgs/crossBlack.png')}
                            style={styles.crossImg}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemsBox}>
                    <View style={styles.itemLeft} />
                    {
                        pages.map(e => (
                            <View
                                key={e?.name}
                                style={styles.item}>
                                <View style={styles.itemLeft}>
                                </View>
                                <View style={styles.itemRight}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate(e?.to)}
                                    >
                                        <Text style={styles.itemTxt} >{e?.name}</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        ))
                    }
                </View>
                <View style={styles.space}>
                    <View style={styles.spaceLeft}>

                    </View>
                </View>
            </View>


            <View
                style={styles.item}
            >
                <View style={[styles.itemLeft, { paddingVertical: 30, }]}>

                </View>

            </View>
        </View>
        // </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    main: {
        justifyContent: 'space-between',
        height: '100%'
    },
    lower: {
        height: 40,
        backgroundColor: 'red',
    },
    upper: {
        flex: 1,
    },
    cross: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    crossImg: {
        width: 28,
        height: 28,
    },
    itemsBox: {
        paddingTop: 0,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemLeft: {
        width: 25,
        backgroundColor: acolors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
    },
    itemRight: {
        paddingHorizontal: 20
    },
    itemTxt: {
        fontSize: 16,
        color: acolors.textColor,
        fontWeight: '600',
    },
    space: {
        flex: 1,
    },
    spaceLeft: {
        flex: 1,
        width: 25,
        backgroundColor: acolors.primary,
    },


})