import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Schedule, Upcoming } from '../container/Service';

const UpcominStackNavigator = createStackNavigator();

const UpcomingStack = () => {
    return (
        <UpcominStackNavigator.Navigator
            screenOptions={{ animationEnabled: true, animationTypeForReplace: "push" }}
            headerMode="none"
            initialRouteName="Upcoming"
        >
            <UpcominStackNavigator.Screen name="Upcoming" component={Upcoming} />
            <UpcominStackNavigator.Screen name="Schedule" component={Schedule} />
        </UpcominStackNavigator.Navigator>
    )
}

export default UpcomingStack;
