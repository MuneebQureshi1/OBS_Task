import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Modal } from 'native-base';
import { MapScreenStyles } from '../MapScreenStyles';

interface AreaNameInputModalProps {
    isOpen: boolean;
    crossOnPress: () => void;
    areaInputOnChangeText: (text: string) => void;
    inputValue: string;
    saveOnPress: () => void;
}

export default function AreaNameInputModal(props: AreaNameInputModalProps) {
    return (
        <Modal
            isOpen={props.isOpen}
        >
            <View style={MapScreenStyles.areaNameInputModalContainer}>
                <TouchableOpacity
                    style={MapScreenStyles.crossButtonConatiner}
                    onPress={props.crossOnPress}
                >
                    <Text style={MapScreenStyles.crossButtonText}>X</Text>
                </TouchableOpacity>
                <Text style={[MapScreenStyles.buttonText, { color: 'black', marginLeft: '5%' }]}>
                    Area Name:
                </Text>
                <View>
                    <TextInput
                        style={MapScreenStyles.input}
                        placeholderTextColor={'black'}
                        onChangeText={props.areaInputOnChangeText}
                        value={props.inputValue}
                        placeholder="Enter area name"
                    />

                    <TouchableOpacity
                        style={MapScreenStyles.createButtonContainer}
                        onPress={props.saveOnPress}
                    >
                        <Text style={MapScreenStyles.buttonText}>save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}