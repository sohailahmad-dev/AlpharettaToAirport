import React, { useState, useRef, useEffect } from 'react';
import {
    Modal,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Text,
} from 'react-native';

export default function SelectPopup({
    label,
    options,
    labelStyle,
    containerStyle,
    style,
    placeholder = '',
    defaultValue,
    onSelect,
}) {
    const [isShow, setIsShow] = useState(false);
    const [selected, setSelected] = useState('');
    const modalRef = useRef(null);

    const selectItem = (item) => {
        setSelected(item);
        setIsShow(false);
        if (onSelect) {
            onSelect(item);
        }
    };

    const handleToggleModal = () => {
        if (isShow) {
            setIsShow(false);
        } else {
            closeAllModals(); // Close any other modals before opening this one
            setIsShow(true);
        }
    };

    const closeAllModals = () => {
        // Close all other modals
        if (modalRef.current) {
            modalRef.current();
        }
    };

    // Register this modal's close function
    modalRef.current = () => setIsShow(false);

    useEffect(() => {
        if (defaultValue) {
            setSelected(defaultValue)
            onSelect(defaultValue)
        }
    }, [])

    return (
        <View style={style}>
            <Text
                style={{
                    color: '#333333',
                    marginBottom: 10,
                    fontSize: 12,
                    ...labelStyle,
                }}
            >
                {label ?? ' '}
            </Text>
            <TouchableOpacity onPress={handleToggleModal}>
                <View style={[styles.container, { ...containerStyle }]}>
                    {selected === '' ?
                        <Text style={[styles.selected, { color: '#a0a0a0' }]}>{placeholder}</Text> :
                        <Text style={styles.selected}>{selected}</Text>}
                </View>
            </TouchableOpacity>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={isShow}
                onRequestClose={() => setIsShow(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.box}>
                        <ScrollView style={styles.modalView}>
                            {options &&
                                options.length > 0 &&
                                options.map((item, i) => (
                                    <TouchableOpacity
                                        style={styles.option}
                                        key={i}
                                        onPress={() => selectItem(item)}
                                    >
                                        <View style={styles.circle}>
                                            {item === selected && (
                                                <View style={styles.innerCircle}></View>
                                            )}
                                        </View>
                                        <Text
                                            style={[
                                                styles.selected,
                                                { color: '#333333' },
                                            ]}
                                        >
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
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
        height: 50,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    box: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
    },
    modalView: {
        width: '100%',
        maxHeight: 250,
        backgroundColor: 'white',
        paddingHorizontal: 25,
    },
    text: {
        color: '#333333',
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 19,
    },
    selected: {
        fontSize: 14,
        color: 'black',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 15,
        paddingVertical: 5,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    innerCircle: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
    },
});
