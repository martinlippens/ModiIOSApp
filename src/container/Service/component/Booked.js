import React, { useEffect } from 'react';
import { SafeAreaView ,Image} from 'react-native';
import { theme } from '../../../component/Theme/Theme';
import { Box, Text } from '../../../UI';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Button } from '../../../component';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import moment from 'moment';
import Storage from '../../../Utils/Storage';
import { IMAGE_URL } from '../../../../constant';
import FastImage from 'react-native-fast-image';


const Booked = () => {
    const route = useRoute();
    const params = route.params;
    const { date, currentTime, booking } = params;
    const item = booking.package
    const navigation = useNavigation();

    const storeAppointmentLocally = async () => {
        await Storage.set('upcomingAppointment', booking);
    }


    useEffect(() => {
        storeAppointmentLocally();
    }, []);

    return (
        <SafeAreaView style={theme.base}>
            {item &&
                <Box container justifyContent="space-between" marginHorizontal={wp("3%")}>
                    <Box marginTop={15}>
                        <Text marginTop={10} size={5} lineHeight={25} center>Your cleaning is successfully booked!</Text>
                        <Text marginTop={10} size={3.5} marginBottom={40} center>A confirmation was sent to your email address with more details.</Text>
                        <FastImage
                            source={{ uri: IMAGE_URL + item.image }}
                            resizeMode="contain"
                            style={{ width: wp("30%"), height: hp("20%"), alignSelf: "center" }}
                        />
                        <Text size={5} lineHeight={35} center>{item.title}</Text>
                        <Text size={3.2} color={theme.color.grey} center>{`Cleaning is scheduled for ${moment(booking?.scheduled_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY [at] hh A')}.`}</Text>
                        <Box style={{ borderBottomWidth: 1 }} borderColor={theme.color.lightGrey} marginTop={5} marginHorizontal={10} />
                        <Box justifyContent="center" flexDirection="row" alignItems="center" marginTop={10}>
                            <Image
                                source={require("../../../assets/images/mapPin.png")}
                                style={{ width: 32, height: 32 }}
                                resizeMode="contain"
                            />
                            <Text marginLeft={7} >{booking.address?.street_address}, {booking.address?.city}</Text>
                        </Box>
                    </Box>
                    <Box justifyContent="center" marginBottom={hp("5%")}>
                        <Button
                            title="Add Reminder"
                            width={85}
                            paddingVertical={14}
                            size={3.5}
                            color={theme.color.white}
                            onPress={() => navigation.replace("Reminder")}
                        />
                        <Text marginTop={20} center size={4.3} color={theme.color.link} handleClick={() => navigation.replace("Upcoming")}>Close</Text>
                    </Box>
                </Box>
            }
        </SafeAreaView>
    );
}

export default Booked;