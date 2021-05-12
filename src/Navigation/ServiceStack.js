import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Service } from '../container/index';
import { ScheduleAppointment, SingleService, Schedule, Upcoming, Booked, Reminder } from '../container/Service';

const ServiceStackNavigator = createStackNavigator();

const ServiceStack = () => {
    return (
        <ServiceStackNavigator.Navigator
            screenOptions={{ animationEnabled: true, animationTypeForReplace: "push" }}
            headerMode="none"
            initialRouteName="Service"
        >
            <ServiceStackNavigator.Screen name="Service" component={Service} />
            <ServiceStackNavigator.Screen name="SingleService" component={SingleService} />
            <ServiceStackNavigator.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
            <ServiceStackNavigator.Screen name="Booked" component={Booked} />
            <ServiceStackNavigator.Screen name="Reminder" component={Reminder} />
            <ServiceStackNavigator.Screen name="Upcoming" component={Upcoming} />
            <ServiceStackNavigator.Screen name="Schedule" component={Schedule} />
        </ServiceStackNavigator.Navigator>
    )
}

export default ServiceStack;
