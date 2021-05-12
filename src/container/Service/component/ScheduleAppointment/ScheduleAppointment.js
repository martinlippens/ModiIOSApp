import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { Button, Header } from '../../../../component';
import { theme } from '../../../../component/Theme/Theme';
import { Box, Text, CustomInput } from '../../../../UI';
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Divider } from 'react-native-paper';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { toast } from '../../../../Utils/Toast';
import TimeImage1 from '../../../../assets/images/1Morning.png';
import TimeImage2 from '../../../../assets/images/2LateMorning.png';
import TimeImage3 from '../../../../assets/images/3Afternoon.png';
import TimeImage4 from '../../../../assets/images/LateAfternoon.png';
import { Checkbox } from 'react-native-paper';
import { createUUID } from "../../../../Utils/UUID";
import moment from 'moment';
import HttpClient from '../../../../Utils/HttpClient';
import { getAuthUser } from '../../../../Utils/Helpers';
import Spinner from 'react-native-loading-spinner-overlay';

const Service = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [comment, setComment] = useState('')
    const [currentView, setcurrentView] = useState('date');
    const params = route.params;
    const item = params.item;
    const [chosenDate, setchosenDate] = useState(null);
    const [timeFrame] = useState([
        {
            time: "8 AM - 10 AM",
            title: "Morning",
            image: TimeImage1,
            hours: "08:00:00",
        },
        {
            time: "10 AM - 12 PM",
            title: "Late Morning",
            image: TimeImage2,
            hours: "10:00:00",
        },
        {
            time: "12 PM - 2 PM",
            title: "Afternoon",
            image: TimeImage3,
            hours: "12:00:00",
        },
        {
            time: "2 PM - 4 PM",
            title: "Late Afternoon",
            image: TimeImage4,
            hours: "14:00:00",
        }
    ]);
    const [currentTime, setCurrentTime] = useState(null);
    const [currentTimeIndex, setCurrentTimeIndex] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(0);
    const [cleanOption, setOptions] = useState([
        {
            id: 1,
            title: 'Oven',
            checked: false
        },
        {
            id: 2,
            title: 'Pantry',
            checked: false
        },
        {
            id: 3,
            title: 'Interior windows',
            checked: false
        },
        {
            id: 4,
            title: 'Refrigerator',
            checked: false
        }
    ]);

    const [extra, setExtra] = useState([])
    const onDateChange = (date) => {
        setchosenDate(moment(date).format("YYYY-MM-DD"));
    }

    const extraCleaningOptionHandler = (type) => {
        var extra_count = 2;
        const extras = extra;
        var index = extras.indexOf(type);
        if (index > -1) {
            extras.splice(index, 1);
            setExtra(extras);
            useForceUpdate();
            return
        }
        useForceUpdate();
        if (extra.length === extra_count) return
        extras.push(type)
        setExtra(extras)
        useForceUpdate();
    }

    const useForceUpdate = () => {
        setValue(value => value + 1); // update the state to force render
    }

    const handleTimeframesClick = (item, i) => {
        setCurrentTime(item);
        setCurrentTimeIndex(i);
    }

    const setFieldValueHandler = (val, type) => {
        setComment(val);
    }

    const handleBooking = async () => {
        if (!chosenDate) {
            toast("Please choose a date for booking");
            return false;
        }
        if (!currentTime) {
            toast("Please select a Timeframe to continue")
            return false;
        }
        if (item.name == 'Deep Cleaning') {
            if (extra.length != 2) {
                toast("You must select two appliances to clean");
                return false;
            }
        }
        setLoading(true);
        const timeName = currentTime.name
        let data = {}
        data.DateSet = chosenDate
        data.TimeName = timeName
        data.cleanSetTimes = currentTime;
        data.Extra = extra
        let cleanerMsg = comment;
        if (cleanerMsg === "") {
            cleanerMsg = "-";
        }
        data.cleanerMsg = cleanerMsg;
        const user = await getAuthUser();
        const { success, data: booking, errors, message } = await HttpClient.post(`/customers/${user.id}/bookings`, {
            address_id: 1,
            package_id: item.id,
            scheduled_at: chosenDate + ' ' + currentTime.hours,
            note: comment,
            subtotal: item.price,
            tax: 0,
            total_price: item.price,
        });
        setLoading(false);
        if (success) {
            navigation.replace("Booked", { item, date: JSON.stringify(chosenDate), booking })
        } else {
            toast(message);
        }
    }

    return (
        <SafeAreaView style={theme.base}>
            <Header screen="scheduleAppointment" title={item.name} right />
            <Divider />
            <Spinner
                visible={loading}
                animation="fade"
                color={theme.color.primary}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                <Box marginHorizontal={widthPercentageToDP("3%")} container justifyContent="space-between">
                    <Box>
                        <Box>
                            <Pressable onPress={() => setcurrentView('date')}>
                                <Box flexDirection="row" justifyContent="space-between" marginVertical={15} alignItems="center">
                                    <Box flexDirection="row" alignItems="center">
                                        <Image source={require('../../../../assets/images/calendar.png')} style={styles.meunIcon} />
                                        <Text size={4} marginLeft={10}>Date</Text>
                                    </Box>
                                    {chosenDate && <Text color={theme.color.link}>{moment(chosenDate).format("dddd, MMMM Do YYYY")}</Text>}
                                </Box>
                            </Pressable>
                            {currentView === 'date' &&
                                <Box>
                                    {
                                        chosenDate ?
                                            <CalendarPicker
                                                previousTitle={<Icon name='ios-arrow-back' size={20} color='rgb(52, 45, 52)' />}
                                                nextTitle={<Icon name='ios-arrow-forward' size={20} color='rgb(52, 45, 52)' />}
                                                // textStyle={{fontSize: 16, fontFamily:"Montserrat-Light"}}
                                                weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                                                minDate={new Date()}
                                                selectedDayColor="#825082"
                                                selectedDayTextColor="#FFFFFF"
                                                onDateChange={onDateChange}
                                                // disabledDates={["2018-12-05"]}
                                                customDatesStyles={[{
                                                    date: moment(chosenDate, "X").format("YYYY-MM-DD"),
                                                    style: { backgroundColor: '#825082' },
                                                    textStyle: { color: '#FFFFFF' }, // sets the font color
                                                    containerStyle: [], // extra styling for day container
                                                }]}
                                                width={320}
                                            />
                                            :
                                            <CalendarPicker
                                                previousTitle={<Icon name='ios-arrow-back' size={20} color='rgb(52, 45, 52)' />}
                                                nextTitle={<Icon name='ios-arrow-forward' size={20} color='rgb(52, 45, 52)' />}
                                                // textStyle={{fontSize: 16, fontFamily:"Montserrat-Light"}}
                                                weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                                                months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                                                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                                                minDate={new Date()}
                                                selectedDayColor="#825082"
                                                selectedDayTextColor="#FFFFFF"
                                                onDateChange={onDateChange}
                                                // disabledDates={["2018-12-05"]}
                                                width={320}
                                            />
                                    }
                                </Box>
                            }
                            <Pressable onPress={() => setcurrentView('time')}>
                                <Box flexDirection="row" justifyContent="space-between" marginVertical={15} alignItems="center">
                                    <Box flexDirection="row" alignItems="center">
                                        <Image source={require('../../../../assets/images/clock.png')} style={styles.meunIcon} />
                                        <Text size={4} marginLeft={10}>Timeframes</Text>
                                    </Box>
                                    {currentTime && <Text color={theme.color.link}>{currentTime.title}</Text>}
                                </Box>
                            </Pressable>

                            {currentView === 'time' &&
                                <Box flexDirection="row" alignItems="center">
                                    <ScrollView horizontal contentContainerStyle={{ paddingBottom: 20 }}>
                                        {timeFrame.map((item, index) => (
                                            <Box key={index} border={currentTimeIndex === index ? 1 : 0} borderColor={theme.color.primary} marginHorizontal={10} paddingHorizontal={10}>
                                                <Pressable onPress={() => handleTimeframesClick(item, index)}>
                                                    <Box paddingVertical={10}>
                                                        <Image
                                                            source={item.image}
                                                            style={{ width: 100, height: 100, alignSelf: 'center' }}
                                                            resizeMode="cover"
                                                        />
                                                        <Text center>{item.title}</Text>
                                                        <Text center>{item.time}</Text>
                                                    </Box>
                                                </Pressable>
                                            </Box>
                                        ))}
                                    </ScrollView>
                                </Box>

                            }
                            <Pressable onPress={() => setcurrentView('comment')}>
                                <Box flexDirection="row" justifyContent="space-between" marginVertical={15} alignItems="center">
                                    <Box flexDirection="row" alignItems="center">
                                        <Image source={require('../../../../assets/images/list.png')} style={styles.meunIcon} />
                                        <Text size={4} marginLeft={10}>Details</Text>
                                    </Box>
                                </Box>
                            </Pressable>
                            {currentView === 'comment' &&
                                <CustomInput
                                    label="Message For Cleaner"
                                    placeholder="Enter your comments here.."
                                    flex={1}
                                    multiline
                                    numberOfLines={6}
                                    textMarginBottom={10}
                                    setValue={setFieldValueHandler}
                                    textAlignVertical="top"
                                    marginVertical={10}
                                    padding={10}
                                    border={1}
                                    borderColor={theme.color.primary}
                                    value={comment}
                                />
                            }
                        </Box>
                        <Pressable onPress={() => setcurrentView('extra')}>
                            <Box flexDirection="row" justifyContent="space-between" marginVertical={15} alignItems="center">
                                <Box flexDirection="row" alignItems="center">
                                    <Image source={require('../../../../assets/images/extra.png')} style={{ width: 28, height: 28, marginLeft: 1 }} />
                                    <Text size={4} marginLeft={10}>Cleaning Options</Text>
                                </Box>
                            </Box>
                        </Pressable>
                        {currentView === 'extra' &&
                            <Box>
                                {
                                    item.name == 'Deep Cleaning' &&
                                    <Box>
                                        <Text style={styles.detailTitle}>Select 2 appliances to clean:</Text>
                                        <Box style={styles.detailView}>
                                            {
                                                cleanOption.map((d, i) => {
                                                    return (
                                                        <Box key={i} flexDirection="row" alignItems="center">
                                                            <Checkbox
                                                                color={theme.color.primary}
                                                                status={extra.indexOf(d.id) > -1 ? 'checked' : 'unchecked'}
                                                                onPress={() => {
                                                                    extraCleaningOptionHandler(d.id);
                                                                }}
                                                            />
                                                            <Text marginLeft={5}>{d.title}</Text>
                                                        </Box>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
                                }
                            </Box>
                        }
                    </Box>
                    <Box justifyContent="center" marginBottom={hp("5%")}>
                        <Button
                            title="Book it!"
                            size={4}
                            color={theme.color.white}
                            onPress={handleBooking}
                        />
                    </Box>
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Service;

const styles = StyleSheet.create({
    meunIcon: {
        width: 32,
        height: 32
    }
})