import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Text } from "../../UI/index";
import { theme } from '../Theme/Theme';

const Button = ({ title, style, onPress, size, paddingVertical, color, width }) => {
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}>
            <LinearGradient
                colors={['#524552', '#825082']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 1, y: 0.8 }}
                style={[styles.container, {
                    width: widthPercentageToDP(`${width}%`) || widthPercentageToDP("80%"),
                    paddingVertical: paddingVertical || 16
                }, style]}
            >
                <Text center bold color={color || theme.color.secondary} size={size || 3.5}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})