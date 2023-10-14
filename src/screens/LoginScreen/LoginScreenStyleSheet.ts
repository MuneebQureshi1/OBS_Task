import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const loginScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: 'white'
    },
    formContainer: {
        width: wp(90), alignSelf: 'center', marginTop: wp(5)
    },
    inputHeadingTextStyle: {
        color: 'black', fontWeight: 'bold'
    },
    errorTextStyle: {
        color: 'red'
    },
    dontHaveAnAcountAndRegisterTextContainer: {
        flexDirection: 'row', justifyContent: "center"
    },
    dontHaveAnAccountTextStyle: {
        color: "black"
    },
    registertextStyle: {
        color: 'black', textDecorationLine: 'underline', fontWeight: 'bold'
    },
    buttonTextStyle: {
        color: 'white', fontWeight: 'bold',
    }

})