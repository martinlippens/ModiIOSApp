import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Profile } from '../container/index';

const MainStackNavigator = createStackNavigator();

const MainStack = () => {
    return (
        <MainStackNavigator.Navigator
            screenOptions={{ animationEnabled: true, animationTypeForReplace: "push" }}
            headerMode="none"
            initialRouteName="Home"
        >
            <MainStackNavigator.Screen name="Home" component={Home} />
            <MainStackNavigator.Screen name="Profile" component={Profile} />
        </MainStackNavigator.Navigator>
    )
}

export default MainStack;
