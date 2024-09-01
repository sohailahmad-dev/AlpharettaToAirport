import { StyleSheet } from 'react-native';
import { acolors } from '../constants/colors';

const globalStyles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    bgContainer: {
        backgroundColor: 'white',
        width: '100%',
        minHeight: '100%',
        padding: 20,
    },
    mainContent: {
        padding: 20,
        flex: 1
    },
    heading1: {
        color: acolors.primary,
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,

    },
    backIcon: {
        width: 40,
        height: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    logo: {
        width: 200,
        height: 50,
        resizeMode: 'contain',
    },
    menuIcon: {
        width: 20,
        height: 20,
    },
    center: {
        alignSelf: 'center'
    },
    subHeading1: {
        fontFamily: 'Gilroy-Black',
        fontSize: 14,
        color: acolors.black,
    },
    text: {
        color: acolors.textColor,
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 19,
    },
    bottomBtnBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});

export default globalStyles;