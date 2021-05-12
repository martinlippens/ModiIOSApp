import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, Pressable } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Header } from '../../component';
import { theme } from '../../component/Theme/Theme';
import { Box, Text } from "../../UI/index";
import MainImage from "../../assets/images/home.png";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';
import { getAuthUser } from '../../Utils/Helpers';

const Home = () => {
    const navigation = useNavigation();
    const [user, setuser] = useState(null);


    const getUserInfo = async () => {
        const data = await getAuthUser();
        console.log('data', data);
        if (data) {
            setuser(data);
        } else {
            alert("Session has been expired, Please login again");
            navigation.replace("Auth");
        }
    }

    useEffect(() => {
        getUserInfo()
    }, []);

    return (
        <SafeAreaView style={theme.base}>
            <Box width={wp("96%")} marginHorizontal={wp("2%")}>
                <Header menu left />
                <Image
                    source={MainImage}
                    style={{ width: "80%", height: "55%", resizeMode: "cover", alignSelf: "center" }}
                />
                <Text center size={6} lineHeight={55} bold>Hi {user && `${user.first_name} ${user.last_name}`}, welcome! </Text>
                <Text center color={theme.color.grey}>You've activated your Modi account and can now begin using the full benefits of your new appartment complex.</Text>
                <Pressable onPress={() => navigation.navigate("Service")}>
                    <Box flexDirection="row" alignItems="center" justifyContent="center" marginTop={15}>
                        <Text size={4.5} bold color={theme.color.link}>Great. Let's continue</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={25}
                            color={theme.color.link}
                        />
                    </Box>
                </Pressable>
            </Box>
        </SafeAreaView>
    );
}

export default Home;