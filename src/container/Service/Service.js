import React, { useState, useEffect } from 'react';
import { SafeAreaView,Image,  Pressable, ScrollView } from 'react-native';
import { Header } from '../../component';
import { theme } from '../../component/Theme/Theme';
import { Box, Text } from '../../UI';

import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import HttpClient from '../../Utils/HttpClient';
import { IMAGE_URL } from '../../../constant';
import Spinner from 'react-native-loading-spinner-overlay';

import FastImage from 'react-native-fast-image';

const Service = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true)
    const [serviceData, setServiceData] = useState(null);

    const getSevicesWithAllPackages = async () => {
        const { data } = await HttpClient.get('/services');
        setLoading(false);
        setServiceData(data);
    }


    const renderAllServices = () => {

    }


    useEffect(() => {
        getSevicesWithAllPackages()
    }, [])

    return (
        <SafeAreaView style={theme.base}>
            <Header screen="service" left />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text center size={6} lineHeight={25} marginTop={hp("1.5%")} marginBottom={hp("5%")}>What type of service do you want?</Text>
                {serviceData ?
                    serviceData.map((s, i) => (
                        <Box key={i}>
                            <Text center size={6} lineHeight={25} marginBottom={10}>{s.name}</Text>
                            <Text center size={3.5} marginBottom={20} marginLeft={10} marginRight={10}>{s.description}</Text>
                            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} horizontal>
                                {
                                    s.packages.map((method, index) => (
                                        <Box key={index}>
                                            <Pressable key={index} onPress={() => navigation.navigate("SingleService", { index: index, item: method, name: s.name })}>
                                                <FastImage
                                                    source={{ uri: IMAGE_URL + method.image }}
                                                    resizeMode="contain"
                                                    style={{ width: wp("50%"), height: hp("15%") }}
                                                />
                                                <Text marginTop={10} center>{method.name}</Text>
                                                <Text marginTop={5} size={4.5} center>${method.price}</Text>
                                            </Pressable>
                                        </Box>

                                    ))
                                }
                            </ScrollView>
                        </Box>
                    ))
                    :
                    <Spinner
                        visible={loading}
                        animation="slide"
                        color={theme.color.primary}
                    />
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default Service;