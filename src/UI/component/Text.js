import React from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '../../component/Theme/Theme';
const CustomText = ({ style, line, lineHeight, children, light, handleClick, size, bold, color, marginTop, marginBottom, marginRight, marginLeft, paddingLeft, paddingRight, paddingTop, paddingBottom, capitalize, uppercase, center }) => {
    const fontSize = wp(`${size || 3.5}%`);
    return (
        <View pointerEvents={handleClick ? "auto" : "none"}>
            <Text style={[
                style,
                {
                    fontSize: fontSize,
                    fontFamily: bold ? theme.typography.bold : light ? theme.typography.light : theme.typography.regular,
                    color: color || "black",
                    marginTop: marginTop || 0,
                    marginBottom: marginBottom || 0,
                    lineHeight: lineHeight || 20,
                    letterSpacing: 0.3,
                    marginRight: marginRight || 0,
                    marginLeft: marginLeft || 0,
                    paddingTop: paddingTop || 0,
                    paddingBottom: paddingBottom || 0,
                    paddingRight: paddingRight || 0,
                    paddingLeft: paddingLeft || 0,
                    textAlign: center ? "center" : "auto",
                    textDecorationLine: line ? "line-through" : "none",
                    textTransform: uppercase ? "uppercase" : capitalize ? "capitalize" : "none"
                }
            ]}
                onPress={() => handleClick && handleClick()}

            >
                {children}
            </Text>
        </View>
    );
}

export default CustomText;