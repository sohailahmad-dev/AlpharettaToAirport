import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'

export default function Header({ navigation }) {
    return (
        <View style={globalStyles.header}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    source={require('../assets/imgs/logo.png')}
                    style={globalStyles.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Image
                    source={require('../assets/imgs/menuIcon.png')}
                    style={globalStyles.menuIcon}
                />
            </TouchableOpacity>

        </View>
    )
}