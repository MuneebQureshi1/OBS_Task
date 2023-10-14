import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ValidationSchema } from './ValidationSchema'
import { Formik } from 'formik'
import { Button, Input } from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { loginScreenStyle } from './LoginScreenStyleSheet'
import { ZoomOutUp } from 'react-native-reanimated'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-toast-message'
import InputBox from '../../Components/InputBox'

interface IProps {
    navigation: {
        navigate(routeName: string, params?: object): void;
    }
}
export default function LoginScreen(props: IProps) {
    const [isPressed, setIsPressed] = useState(false);
    const handleSubmit = (values: {} | any) => {
        Toast.show({
            type: "success",
            text1: "Congratulations, login successful!"
        })
        props.navigation.navigate('MapScreen')

    };
    return (
        <View style={loginScreenStyle.mainContainer}>
            <KeyboardAwareScrollView>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={ValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <View style={loginScreenStyle.formContainer} >
                            <Text style={loginScreenStyle.inputHeadingTextStyle}>Email:</Text>
                            <InputBox
                                secureTextEntry={false}
                                placeholder='Enter email'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={() => setFieldTouched('email')}
                            />
                            {touched.email && errors.email && <Text style={loginScreenStyle.errorTextStyle}>{errors.email}</Text>}

                            <Text style={loginScreenStyle.inputHeadingTextStyle}>Password:</Text>
                            <InputBox
                                secureTextEntry
                                placeholder='Enter password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched('password')}
                            />
                            {touched.password && errors.password && (
                                <Text style={loginScreenStyle.errorTextStyle}>{errors.password}</Text>
                            )}
                            <Button marginY={wp(4)} opacity={isPressed ? 0.7 : 1} onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)} backgroundColor={!isValid ? 'gray.400' : "black"} onPress={(value: {} | any) => { handleSubmit(value) }} disabled={!isValid} >
                                <Text style={loginScreenStyle.buttonTextStyle}>
                                    Log in
                                </Text>
                            </Button>
                        </View>
                    )}
                </Formik>
                <View style={loginScreenStyle.dontHaveAnAcountAndRegisterTextContainer}>
                    <Text style={loginScreenStyle.dontHaveAnAccountTextStyle}>
                        Don't have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => { Alert.alert("This is just an login example", "Please just enter a valid email and password") }}>
                        <Text style={loginScreenStyle.registertextStyle}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View >
    )
}

