import React, { useEffect } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { theme } from '../../../component/Theme/Theme';
import { Box, Text } from '../../../UI';
import { useNavigation } from '@react-navigation/core';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ReminderImage from "../../../assets/images/timer.png";


const Booked = () => {
    const navigation = useNavigation();


    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Upcoming")
        }, 3500);
    }, []);
    return (
        <SafeAreaView style={theme.base}>
            <Box container justifyContent="center" marginHorizontal={wp("3%")}>
                <Box>
                    <Image
                        source={ReminderImage}
                        resizeMode="contain"
                        style={{ width: wp("30%"), height: hp("20%"), alignSelf: "center" }}
                    />
                    <Text size={6} lineHeight={40} center>Reminder Activated</Text>
                    <Text size={3.2} marginTop={5} color={theme.color.grey} center>You will receive an alert prior to your scheduled cleaning appointment.</Text>
                </Box>
            </Box>
        </SafeAreaView>
    );
}

export default Booked;