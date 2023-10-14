import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import React from 'react'
import { MapScreenStyles } from '../MapScreenStyles';
import { calculatePolygonArea } from '../MapScreenFunctions';

interface ArrayDataProps {
    title: string;
    polygon: Array<{ latitude: number, longitude: number }>;
}

interface SavedAreaListModalProps {
    isOpen: boolean;
    crossOnPress: () => void;
    createOnPress: () => void;
    arrayData: Array<ArrayDataProps>;
    setPolygonDataShowModal: (value: boolean) => void;
    setAddedPolygonShow: (value: Array<ArrayDataProps>) => void;
    polygonData: Array<ArrayDataProps>;
    setPolygonData: (data: Array<ArrayDataProps>) => void;
}

export default function SavedAreaListModal(props: SavedAreaListModalProps) {
    return (
        <Modal visible={props.isOpen} animationType='slide'>
            <TouchableOpacity
                style={MapScreenStyles.crossButtonConatiner}
                onPress={props.crossOnPress}
            >
                <Text style={MapScreenStyles.crossButtonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={MapScreenStyles.createButtonContainer}
                onPress={props.createOnPress}
            >
                <Text style={MapScreenStyles.buttonText}>Create</Text>
            </TouchableOpacity>
            <FlatList
                data={props.arrayData}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={MapScreenStyles.listItemMainContainer}
                        key={index}
                        onPress={() => {
                            console.log("Item", item)
                            props.setPolygonDataShowModal(false)
                            props.setAddedPolygonShow([//@ts-ignore
                                {
                                    title: item.title,
                                    polygon: item.polygon
                                }
                            ]);

                        }}
                    >
                        <View style={MapScreenStyles.listSignleItemContainer}>
                            <View style={MapScreenStyles.itemContainer}>
                                <View>
                                    <Text style={MapScreenStyles.itemTitleText}> {item.title}</Text>
                                    <Text style={MapScreenStyles.itemAreaText}>Area: {calculatePolygonArea(item.polygon)} sf</Text>
                                </View>
                                <TouchableOpacity
                                    style={MapScreenStyles.deteleItemContainer}
                                    onPress={() => {
                                        let _data = props.polygonData
                                        _data.splice(index, 1)
                                        props.setPolygonData([..._data]);
                                    }}
                                >
                                    <Text style={MapScreenStyles.deleteItemText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </TouchableOpacity>
                )}
            />
        </Modal>
    )
}