import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { acolors } from '../constants/colors';

export default function Input({
    type,
    placeHolder,
    value,
    multiline,
    maxLength,
    style,
    editable,
    secure,
    onSecure,
    onChangeText,
    onBlur,
    icon,
    containerStyle,
    iconStyle,
    iconLeft,
    label,
    labelStyle

}) {

    console.log(label)

    return (
        <>
            {label ? (
                <Text
                    style={{
                        fontFamily: 'Gilroy-Regular',
                        color: acolors.grey,
                        marginBottom: 10,
                        fontSize: 12,
                        ...labelStyle,
                    }}>
                    {label}
                </Text>
            ) : null}

            <View style={[styles.container, { ...containerStyle }]}>
                {iconLeft ?
                    <Image
                        source={iconLeft}
                        style={styles.iconLeftStyle}
                    />
                    : null}
                <TextInput
                    editable={editable}
                    multiline={multiline}
                    value={value}
                    maxLength={maxLength}
                    secureTextEntry={secure}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={type ? type : 'default'}
                    placeholder={placeHolder ? placeHolder : ''}
                    placeholderTextColor="#a0a0a0"
                    style={{
                        fontFamily: 'Gilroy-Regular',
                        height: multiline ? 'auto' : 50,
                        fontSize: 14,
                        color: '#000',
                        flex: 1,
                        ...style,
                    }}
                />
                {icon ? <TouchableOpacity
                    onPress={onSecure}
                >
                    <Image
                        source={icon}
                        style={iconStyle ?? styles.img}
                    />
                </TouchableOpacity> : null}

            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: '#D6D6D6',
        backgroundColor: '#F3f3f3',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    iconLeftStyle: {
        width: 18,
        height: 18,
        marginEnd: 5,
    },
    img: {
        width: 12,
        height: 8,
        resizeMode: 'contain'
    }
})