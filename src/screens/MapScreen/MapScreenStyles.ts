import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export const MapScreenStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    },
    showAreaButton: {
        backgroundColor: "black",
        padding: 10,
        position: "absolute",
        top: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        marginLeft: wp(5),
        width: wp(70),
        borderRadius: wp(20)
    },
    finishButtonContainer: {
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 20,
        borderRadius: 5,
        zIndex: 100
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    createButtonContainer: {
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 16,
        width: "90%",
        alignSelf: "center"
    },
    input: {
        width: "90%",
        alignSelf: "center",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 16,
        padding: 8,
        borderRadius: 10,
        color: 'black'
    },
    listSignleItemContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        margin: 10,
        padding: 8
    },
    crossButtonConatiner: {
        margin: wp(4),
        borderWidth: 1,
        borderRadius: wp(25),
        width: wp(7),
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    crossButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    listItemMainContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitleText: {
        color: 'black',
        fontWeight: 'bold'
    },
    itemAreaText: {
        color: 'black',
        marginLeft: wp(1)
    },
    deteleItemContainer: {
        marginRight: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        width: wp(6),
        height: hp(3),
        alignItems: 'center',
        borderRadius: wp(25),
        backgroundColor: 'red'
    },
    deleteItemText: {
        color: "white"
    },
    areaNameInputModalContainer: {
        backgroundColor: 'white',
        width: wp(90),
        paddingVertical: wp(5),
        borderRadius: wp(8)
    },
    polygonTitleStyle: {
        color: 'white',
        backgroundColor: "#00000080",
        padding: wp(2),
        borderRadius: wp(2)
    }
});