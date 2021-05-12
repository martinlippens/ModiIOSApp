import React, { useState, useEffect } from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { theme } from '../../../component/Theme/Theme';
import { Box, Text } from '../../../UI';
import { useNavigation } from '@react-navigation/core';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Storage from "../../../Utils/Storage";
import { Header } from '../../../component/index';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from 'moment';
import { getAuthUser } from '../../../Utils/Helpers';

const Upcoming = () => {
    const navigation = useNavigation();
    const [upcomingAppontment, setUpcomingAppontment] = useState(null);
    const [user, setuser] = useState(null);
    useEffect(() => {
        getUpcomingAppointment();
        getUserInfo();
    }, []);

    const getUpcomingAppointment = async () => {
        const data = await Storage.get('upcomingAppointment');
        setUpcomingAppontment(data);
    }

    const getUserInfo = async () => {
        const data = await getAuthUser();
        if (data) {
            setuser(data);
        }
    }

    return (
        <SafeAreaView style={theme.base}>
            <LinearGradient
                colors={['#524552', '#825082']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 1, y: 0.8 }}
                style={{ height: hp("100%"), width: wp("100%") }}
            >
                {upcomingAppontment &&
                    <Box container justifyContent="space-between">
                        <Box>
                            <Header title="Upcoming" titleColor={theme.color.white} left menu right screen="upcoming" />
                            <Box marginHorizontal={wp("3%")}>
                                <Box marginTop={15}>
                                    <Text size={4.5} lineHeight={25} center color={theme.color.white} center>Hey {user && `${user.first_name} ${user.last_name}`}, your {upcomingAppontment?.package?.name} is coming up! </Text>
                                    <Box marginTop={hp("20%")} marginHorizontal={15}>
                                        <Text size={9} lineHeight={40} color={theme.color.white} center>{moment(upcomingAppontment.scheduled_at).format("dddd")}</Text>
                                        <Text size={3.5} marginTop={15} center color={theme.color.white} center>{`Cleaning is scheduled for ${moment(upcomingAppontment?.scheduled_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY [at] hh A')}.`} </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box marginBottom={hp("5%")} width={wp("85%")} alignSelf="center" borderRadius={5} backgroundColor="#296d98" paddingVertical={15} paddingHorizontal={15}>
                            <Pressable onPress={() => navigation.navigate("Service")}>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                                    <Text size={4} color={theme.color.white}>Book your next cleaning</Text>
                                    <MaterialCommunityIcons
                                        name="arrow-right"
                                        size={22}
                                        color={theme.color.white}
                                    />
                                </Box>
                            </Pressable>
                        </Box>
                    </Box>
                }
            </LinearGradient>
        </SafeAreaView>
    );
}

export default Upcoming;