import React from 'react';
import { Box, Text } from '../../UI';
import { theme } from '../Theme/Theme';
import Center from './components/Center';
import Left from './components/Left';
import Right from './components/Right';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';
import { Image, Pressable } from 'react-native';
import MenuIcon from "../../assets/images/grey.png";
import BackIcon from "../../assets/images/back.png";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { DrawerActions } from '@react-navigation/native';
const Header = ({ rightIconClick, right, screen, titleColor, left, menu, title }) => {
    const navigation = useNavigation();
    return (
        <Box backgroundColor={screen === "upcoming" ? theme.color.transparent : theme.color.white} paddingHorizontal={5} paddingBottom={8} paddingTop={10} flexDirection="row" justifyContent="space-between" alignItems="center">
            <Left>
                {left &&
                    <Pressable onPress={() => menu ? navigation.dispatch(DrawerActions.toggleDrawer()) : navigation.goBack()}>
                        <Image
                            source={menu ? MenuIcon : BackIcon}
                            style={{ width: wp("5%"), height: hp("5%") }}
                            resizeMode="contain"
                        />
                    </Pressable>
                }
            </Left>
            <Center>
                {title &&
                    <Box paddingLeft={screen === "scheduleAppointment" ? 10 : 0} flexDirection="row" alignItems="center" marginRight={10}>
                        <Text size={3.7} color={titleColor || theme.color.black} marginLeft={5} bold>{title}</Text>

                    </Box>
                }
            </Center>
            <Right>
                {right &&
                    screen === "scheduleAppointment" ?
                    <Box padding={10}>
                        <MaterialCommunityIcons
                            name="close"
                            size={22}
                            onPress={() => navigation.goBack()}
                        />
                    </Box>
                    :
                    screen === "upcoming" &&
                    <Box padding={10}>
                        <Pressable onPress={() => navigation.navigate("Schedule")}>
                            <Image
                                source={require("../../assets/images/white.png")}
                                style={{ width: 25, height: 25 }}
                                resizeMode="contain"
                            />
                        </Pressable>
                    </Box>
                }
            </Right>
        </Box>
    );
}

export default Header;