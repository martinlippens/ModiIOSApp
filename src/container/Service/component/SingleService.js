import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Button, Header } from '../../../component';
import { theme } from '../../../component/Theme/Theme';
import { Box, Text } from '../../../UI';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/core';
import { IMAGE_URL } from '../../../../constant';
import FastImage from 'react-native-fast-image';


const Service = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const params = route.params;
    const item = params.item
    return (
        <SafeAreaView style={theme.base}>
            <Header screen="singleService" left />
            {item &&
                <Box container justifyContent="space-between" marginHorizontal={wp("3%")}>
                    <Box>
                        <FastImage
                            source={{ uri: IMAGE_URL + item.image }}
                            resizeMode="contain"
                            style={{ width: wp("50%"), height: hp("25%"), alignSelf: "center" }}
                        />
                        <Text marginTop={10} size={6} lineHeight={35} center>{item.name}</Text>
                        <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={10}>
                            <Text marginTop={5} size={4} center>1 hour service</Text>
                            <Text marginTop={5} size={4} center>${item.price}</Text>
                        </Box>
                        <Text size={3.5} marginTop={hp("2%")}>{item.description}</Text>
                    </Box>
                    <Box justifyContent="center" marginBottom={hp("5%")}>
                        <Button
                            title="Schedule appointment"
                            size={4}
                            color={theme.color.white}
                            onPress={() => navigation.navigate("ScheduleAppointment", { item })}
                        />
                    </Box>
                </Box>
            }
        </SafeAreaView>
    );
}

export default Service;