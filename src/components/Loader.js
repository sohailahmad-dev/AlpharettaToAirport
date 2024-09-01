import React from 'react';
import { Modal, StyleSheet, View, ActivityIndicator, SafeAreaView } from 'react-native';

export default function Loader({ isShow = true }) {
    return (
        <SafeAreaView>
            <View style={styles.centeredView}>
                <Modal animationType="fade" transparent={true} visible={isShow}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <ActivityIndicator size="large" color="#4E74F9" />
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        // backgroundColor: 'white',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
