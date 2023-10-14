import React from 'react'
import { Input } from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface IBoxprops {
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void;
    onBlur: () => void,
    secureTextEntry: boolean
}

export default function InputBox(props: IBoxprops) {
    return (
        <Input
            secureTextEntry={props.secureTextEntry ? true : false}
            placeholder={props.placeholder}
            placeholderTextColor={'black'}
            marginY={hp(1)}
            value={props.value}
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
            _focus={{ borderColor: 'black' }}
        />
    )
}