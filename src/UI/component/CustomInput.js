import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Box, Text } from '..';
import { theme } from '../../component/Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomInput = ({ icon, style, setValue, handleSubmit, keyboardType, textContentType, scrollEnabled, secure, multiline,
    textAlignVertical, color, inputContainerStyle, iconColor, labelStyle, borderRadius, label, alignItems, flex, padding, margin,
    iconAfter, marginVertical, numberOfLines, backgroundColor, blur, placeholder, maxLength,
    absoluteIcon, absoluteIconPress, returnKeyLabel, absoluteIconSize,
    returnKeyType, prefix, onFocus, handleAfterPress, textMarginBottom, placeholderTextColor, iconPress, border, value, type, editable, borderColor }) => {
    return (
        <Box marginVertical={marginVertical || 0}>
            {label &&
                <Text style={labelStyle} marginBottom={textMarginBottom || 0} uppercase size={3} color={color || theme.color.black}>{label}</Text>
            }
            <Box
                backgroundColor={backgroundColor || "transparent"}
                borderRadius={borderRadius || 5}
                border={border || 0}
                style={[inputContainerStyle, { borderBottomWidth: 1, borderBottomColor: borderColor || theme.color.primary }]}
                alignItems={alignItems || "center"}
                borderColor={borderColor || theme.color.primary}
                flexDirection="row">
                {icon ? (
                    <Box marginHorizontal={10}>
                        <MaterialCommunityIcons
                            name={icon}
                            size={25}
                            color={iconColor || theme.color.primary}
                            onPress={() => iconPress && iconPress()}

                        />
                    </Box>
                )
                    : prefix &&
                    <Text color={color} bold size={4}>{prefix}</Text>
                }
                <TextInput
                    editable={editable === false ? editable : true}
                    placeholder={placeholder}
                    value={value}
                    secureTextEntry={secure}
                    keyboardType={keyboardType || "default"}
                    textContentType={textContentType || "none"}
                    returnKeyLabel={returnKeyLabel || ""}
                    returnKeyType={returnKeyType || "default"}
                    scrollEnabled={scrollEnabled || false}
                    onSubmitEditing={() => handleSubmit && handleSubmit()}
                    autoCapitalize="none"
                    onBlur={(e) => blur && blur(e)}
                    onFocus={(e) => onFocus && onFocus(e)}
                    placeholderTextColor={placeholderTextColor || theme.color.grey}
                    multiline={multiline}
                    textAlignVertical={textAlignVertical || "auto"}
                    maxLength={maxLength}
                    numberOfLines={numberOfLines || 1}
                    onChangeText={(val) => setValue(val, type)}
                    style={[style, {
                        flex: flex || 0,
                        padding: padding || 0,
                        margin: margin || 0,
                        color: theme.color.grey
                    }]}
                />
                {iconAfter && (
                    <Box flexDirection="row" alignItems="center" marginRight={10}>
                        <MaterialCommunityIcons
                            name={iconAfter}
                            size={20}
                            color={theme.color.grey}
                            onPress={() => handleAfterPress && handleAfterPress()}
                        />
                    </Box>
                )}
            </Box>
            {absoluteIcon && (
                <Box style={styles.absoluteIconContainer}>
                    <AntDesign
                        onPress={() => absoluteIconPress && absoluteIconPress()}
                        name={absoluteIcon}
                        size={absoluteIconSize}
                        color={theme.color.primary}
                        style={{ zIndex: 999999999 }}
                    />
                </Box>
            )}
        </Box>
    );
}

export default CustomInput;

const styles = StyleSheet.create({
    absoluteIconContainer: {
        position: 'absolute',
        top: 20,
        right: 6,
        zIndex: 99999
    }
})
