import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TextInput,
    FlatList,
    TouchableHighlight,
    Alert,
    BackHandler
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Polygon, Marker, Polyline } from "react-native-maps";
import { MapScreenStyles } from "./MapScreenStyles";
import AreaNameInputModal from "./components/AreaNameInputModal";
import Toast from "react-native-toast-message";
import SavedAreaListModal from "./components/SavedAreaListModal";
import { widthPercentageToDP } from "react-native-responsive-screen";

const MapScreen = () => {
    //Polygon Show States    
    const [polygonData, setPolygonData] = useState<any>([]);
    const [polygonCoordinates, setPolygonCoordinates] = useState<any>([]);
    const [addedPolygonShow, setAddedPolygonShow] = useState<any>([]);
    const [currentLine, setCurrentLine] = useState<any>([]);

    //Polygon Modal States
    const [polygonInputModal, setPolygonInputModal] = useState<any>(false);
    const [polygonDataShowModal, setPolygonDataShowModal] = useState<any>(false);

    //Area calculation 
    const [area, setArea] = useState<any>("");

    //state which tell is user started drawing or not started 
    const [isStartedDrawing, setIsStartedDrawing] = useState<any>(false);

    const mapRef = useRef(null);

    useEffect(() => {
        const backAction = () => {
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        if (addedPolygonShow.length !== 0) {
            console.log("polygon", JSON.stringify(addedPolygonShow.polygon))
            const firstItem = addedPolygonShow[0]; // Get the first item in the array
            const targetLatitude = firstItem.polygon[0].latitude;
            const targetLongitude = firstItem.polygon[0].longitude;
            if (mapRef?.current) {//@ts-ignore
                mapRef.current.animateToRegion({
                    latitude: targetLatitude,
                    longitude: targetLongitude,
                    latitudeDelta: 0.0010,
                    longitudeDelta: 0.0010
                });
            }
        }

    }, [addedPolygonShow])

    return (
        <View style={MapScreenStyles.container}>
            <MapView
                style={MapScreenStyles.map}
                mapType="hybrid"
                initialRegion={{
                    latitude: 33.6844,
                    longitude: 73.0479,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0021
                }}
                scrollEnabled={!isStartedDrawing}
                zoomEnabled={!isStartedDrawing}
                ref={mapRef}
                onPanDrag={(e: any) => {
                    if (isStartedDrawing) {
                        const newCoordinate = e.nativeEvent.coordinate;
                        setCurrentLine([...currentLine, newCoordinate]);
                    }
                }}
                onTouchEnd={() => {
                    setPolygonCoordinates(currentLine)
                    setCurrentLine([])
                }}
            >

                {currentLine.length > 1 && (
                    <Polyline
                        coordinates={currentLine}
                        strokeColor="blue"
                        strokeWidth={3}
                    />)}
                {polygonCoordinates.length !== 0 && (
                    <Polygon
                        coordinates={polygonCoordinates}
                        fillColor="rgba(0, 0, 255, 0.5)"
                        strokeColor="rgba(0, 0, 255, 1)"
                        strokeWidth={3}
                    />
                )}
                {addedPolygonShow.map((item: any, index: any) => (
                    <Polygon
                        key={index}
                        coordinates={item.polygon}
                        fillColor="rgba(0, 255, 0, 0.5)"
                        strokeColor="rgba(0, 255, 0, 1)"
                        strokeWidth={3}

                    />
                ))}
                {addedPolygonShow.length !== 0 && addedPolygonShow.map((item: any, index: any) => (

                    < Marker
                        coordinate={{
                            latitude: item.polygon[0].latitude,
                            longitude: item.polygon[0].longitude,
                        }}
                    >
                        <Text style={MapScreenStyles.polygonTitleStyle}>{item.title}</Text>
                    </Marker>
                ))}


            </MapView>


            <TouchableOpacity
                style={MapScreenStyles.showAreaButton}
                onPress={() => {
                    console.log("Psdada", addedPolygonShow.length)
                    if (addedPolygonShow.length !== 0 || polygonCoordinates.length !== 0 || isStartedDrawing) {
                        setAddedPolygonShow([])
                        setPolygonCoordinates([])
                        setIsStartedDrawing(false)
                    } else {
                        setPolygonDataShowModal(true);
                    }
                }}
            >
                <Text style={MapScreenStyles.buttonText}>{addedPolygonShow.length !== 0 || polygonCoordinates.length !== 0 || isStartedDrawing ? "Cancel" : "Show Area List"}</Text>
            </TouchableOpacity>

            {
                isStartedDrawing && (
                    <TouchableOpacity
                        style={MapScreenStyles.finishButtonContainer}
                        onPress={() => {
                            if (polygonCoordinates.length !== 0) {
                                setPolygonInputModal(true);
                            } else {
                                Toast.show({
                                    type: 'success',
                                    text1: "Havent draw any thing yet"
                                })
                            }
                        }}
                    >
                        <Text style={MapScreenStyles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                )
            }
            <AreaNameInputModal
                isOpen={polygonInputModal}
                crossOnPress={() => {
                    setPolygonInputModal(false)
                }}
                areaInputOnChangeText={(Text: string) => {
                    setArea(Text.trim());
                }}
                inputValue={area}
                saveOnPress={
                    () => {
                        setPolygonData([//@ts-ignore
                            ...polygonData,
                            {
                                title: area,
                                polygon: polygonCoordinates
                            }
                        ]);
                        Toast.show({
                            type: 'success',
                            text1: "Marked area is saved "
                        })
                        setArea("");
                        setPolygonCoordinates([]);
                        setIsStartedDrawing(false);
                        setPolygonInputModal(false);
                    }
                }
            />
            <SavedAreaListModal
                isOpen={polygonDataShowModal}
                crossOnPress={() => {
                    setPolygonDataShowModal(false)
                }}
                createOnPress={() => {
                    setIsStartedDrawing(true);
                    setPolygonDataShowModal(false);
                }}
                arrayData={polygonData}
                setAddedPolygonShow={setAddedPolygonShow}
                setPolygonDataShowModal={setPolygonDataShowModal}
                polygonData={polygonData}
                setPolygonData={setPolygonData}

            />

        </View >
    );
};

export default MapScreen;


