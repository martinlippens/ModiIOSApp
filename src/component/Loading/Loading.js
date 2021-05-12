import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';

import LoadingImage from '../../assets/images/smallLoading.gif';

const Loading = () => (
    <SafeAreaView style={[{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }]} >
        <Image
            source={LoadingImage}
            style={{ width: wp("30%"), alignSelf: 'center', height: hp("30%"), resizeMode: 'contain' }}
        />
    </SafeAreaView>
)

export default Loading;