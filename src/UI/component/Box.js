import React from 'react';
import { View } from 'react-native';
import { theme } from '../../component/Theme/Theme';
const Box = ({ style, container, backgroundColor, border, borderRadius, borderColor, children,
    width, height, minWidth, wrap, minHeight, maxWidth, maxHeight, marginTop, margin, padding, marginBottom, marginRight, marginLeft, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingVertical, paddingHorizontal, marginVertical, marginHorizontal, flexDirection, justifyContent, alignContent, alignItems, alignSelf }) => {

    return (
        <View
            style={[
                style,
                {
                    width: width,
                    height: height,
                    minWidth: minWidth,
                    minHeight: minHeight,
                    flexWrap: wrap || 'nowrap',
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    margin: margin,
                    padding: padding,
                    marginTop: marginTop,
                    marginBottom: marginBottom,
                    marginRight: marginRight,
                    marginLeft: marginLeft,
                    paddingTop: paddingTop,
                    paddingBottom: paddingBottom,
                    paddingRight: paddingRight,
                    paddingLeft: paddingLeft,
                    marginHorizontal: marginHorizontal,
                    marginVertical: marginVertical,
                    paddingVertical: paddingVertical,
                    paddingHorizontal: paddingHorizontal,
                    backgroundColor: backgroundColor,
                    flex: container ? 1 : 0,
                    flexDirection: flexDirection || "column",
                    justifyContent: justifyContent,
                    alignContent: alignContent,
                    alignItems: alignItems,
                    alignSelf: alignSelf,
                    borderWidth: border || 0,
                    borderRadius: borderRadius || 0,
                    borderColor: borderColor || "black"
                }
            ]}
        >
            {children}
        </View>
    );
}

export default Box;