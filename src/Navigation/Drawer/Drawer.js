import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './component/DrawerContent';
const MainDrawerNavigator = createDrawerNavigator();
import { MainStack } from '../index';
import ServiceStack from '../ServiceStack';
import { History } from '../../container';
import { Help } from '../../component';
import UpcomingStack from '../UpcomingStack';


const Drawer = () => {
    return (
        <MainDrawerNavigator.Navigator
            initialRouteName="Home"
            drawerContent={props =>
                <DrawerContent
                    loggedIn={false}
                    {...props}
                />
            }
        >
            <MainDrawerNavigator.Screen name="Home" component={MainStack} />
            <MainDrawerNavigator.Screen name="Service" component={ServiceStack} />
            <MainDrawerNavigator.Screen name="UpcomingScreen" component={UpcomingStack} />
            <MainDrawerNavigator.Screen name="History" component={History} />
            <MainDrawerNavigator.Screen name="Help" component={Help} />
        </MainDrawerNavigator.Navigator>
    )
}

export default Drawer;