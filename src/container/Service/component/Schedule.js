import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, } from 'react-native';
// import moment from 'moment';
import Timeline from 'react-native-timeline-flatlist';
// import HttpClient from '../../../Utils/HttpClient';
import { Header } from '../../../component';
import { theme } from '../../../component/Theme/Theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Schedule = props => {
    const [timelineData, setTimelineData] = useState([
        {
            time: "Tue, Dec 22 09:00 AM",
            title: "Deep Cleaning",
            icon: require('../../../assets/images/basicCleaning.png'),
            lineColor: "#009688",
            description: "My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
        },
        {
            time: "Tue, Dec 22 10:00 AM",
            title: "Deep Cleaning",
            icon: require('../../../assets/images/basicCleaning.png'),
            description: "My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
        },
        {
            time: "Tue, Dec 22 01:00 PM",
            title: "Basic Cleaning",
            icon: require('../../../assets/images/deepCleaning.png'),
            description: "My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
        },
        {
            time: "Tue, Dec 22 05:00 PM",
            title: "Deep Cleaning",
            icon: require('../../../assets/images/basicCleaning.png'),
            description: "My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
        }
    ])

    // useEffect(() => {
    //  getBookingHistory();
    // }, []);

    // const getBookingHistory = async () => {
    //     const { userinfo: user } = this.props;
    //     const { data } = await HttpClient.get('/customers/' + user.id + '/bookings');
    //     const bookings = data.map(booking => {
    //         return {
    //             title: booking?.package?.name,
    //             description: booking?.package?.description,
    //             icon: HttpClient.BASE_URL + '/storage/' + booking?.package?.image,
    //             time: moment(booking?.created_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY hh A'),
    //         }
    //     });
    //     setTimelineData(bookings)
    // }

    return (
        <SafeAreaView style={theme.base}>
            <Header left title="Schedule" />
            <ScrollView contentContainerStyle={{ marginTop: 50, width: widthPercentageToDP("90%"), marginHorizontal: widthPercentageToDP("5%") }}>
                <Timeline
                    data={timelineData}
                    timeContainerStyle={{ minWidth: 72, maxWidth: 90 }}
                    innerCircle='icon'
                />
            </ScrollView>
        </SafeAreaView>
    )
}


export default Schedule