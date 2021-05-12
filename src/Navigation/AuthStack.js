import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, ForgetPassword } from '../Authentication/index';

const AuthenticationStack = createStackNavigator();

const AuthStack = () => {
    return (
        <AuthenticationStack.Navigator
            initialRouteName="Login"
            screenOptions={{ animationEnabled: true, animationTypeForReplace: "pop" }}
            headerMode="none"
        >
            <AuthenticationStack.Screen component={Login} name="Login" />
            <AuthenticationStack.Screen component={Signup} name="Signup" />
            <AuthenticationStack.Screen component={ForgetPassword} name="ForgetPassword" />
        </AuthenticationStack.Navigator>
    )
}

export default AuthStack;
