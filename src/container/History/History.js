import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import HttpClient from '../../Utils/HttpClient';
import { Header } from '../../component';
import { theme } from '../../component/Theme/Theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import moment from 'moment';
import { getAuthUser } from '../../Utils/Helpers';
import Spinner from 'react-native-loading-spinner-overlay';

const History = () => {
    const [timelineData, setTimelineData] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getBookingHistory();
    }, []);

    const getBookingHistory = async () => {
        const user = await getAuthUser();
        const { data } = await HttpClient.get('/customers/' + user.id + '/bookings');
        setloading(false);
        if (data) {
            const bookings = data.map(booking => {
                return {
                    title: booking?.package?.name,
                    description: booking?.package?.description,
                    icon: HttpClient.BASE_URL + '/storage/' + booking?.package?.image,
                    time: moment(booking?.created_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY hh A'),
                }
            });
            setTimelineData(bookings)
        }
    }

    return (
        <SafeAreaView style={theme.base}>
            <Header left title="History" />
            <Spinner
                visible={loading}
                animation="slide"
                color={theme.color.primary}
            />
            <ScrollView contentContainerStyle={{ marginTop: 50, paddingBottom: 70, width: widthPercentageToDP("90%"), marginHorizontal: widthPercentageToDP("5%") }}>
                <Timeline
                    data={timelineData || []}
                    timeContainerStyle={{ minWidth: 72, maxWidth: 90 }}
                    innerCircle='icon'
                />
            </ScrollView>
        </SafeAreaView>
    )
}


export default History