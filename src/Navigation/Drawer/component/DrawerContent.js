import React,{useState,useEffect} from 'react';
import { SafeAreaView ,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { theme } from '../../../component/Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Box, Text } from '../../../UI';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Storage from '../../../Utils/Storage';
import { removeApiToken, removeAuthUser ,getAuthUser} from '../../../Utils/Helpers';

const DrawerContent = props => {
    const navigation = useNavigation();
    const inset = useSafeAreaInsets()
    const [user, setuser] = useState(null);


     useEffect(() => {
       getProfileData();
   }, [])

   const getProfileData = async () => {
        const user = await getAuthUser();
        if(user) {
        setuser(user);
        }else {
            alert("session expired, Please login again");
            navigation.replace("Auth");
        }
   }

    return (
        <SafeAreaView style={theme.base}>
            <DrawerContentScrollView
                contentContainerStyle={{
                    paddingTop: inset.top
                }}
                {...props}>
                <LinearGradient
                    colors={['#524552', '#825082']}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 1, y: 0.8 }}
                    
                >
                <Pressable onPress={() => navigation.navigate("Profile")}>
                    <Box paddingBottom={20}>
                        <Box marginLeft={10} justifyContent="space-between" paddingVertical={20} paddingHorizontal={10} flexDirection="row" alignItems="center">
                            <Box>
                                <Text size={4} bold color={theme.color.white}>{`Hello ${user?.first_name} ${user?.last_name}`}</Text>
                                <Text size={3} marginRight={5} marginTop={3} color={theme.color.white}>1 credit available for February</Text>
                            </Box>
                            <MaterialCommunityIcons
                                name="arrow-right"
                                color={theme.color.white}
                                size={20}
                            />
                        </Box>
                    </Box>
                    </Pressable>
                </LinearGradient>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={() => navigation.navigate("Home")}
                    label="Home"
                    labelStyle={theme.typography.regular}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialIcons
                            name="cleaning-services"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={() => navigation.navigate("UpcomingScreen")}
                    label="Upcoming Cleanings"
                    labelStyle={theme.typography.regular}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="history"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={() => navigation.navigate("History")}
                    label="History"
                    labelStyle={theme.typography.regular}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="help"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={() => navigation.navigate("Help")}
                    label="Help"
                    labelStyle={theme.typography.regular}
                />
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={({ color, size }) => (
                        <SimpleLineIcons
                            name="logout"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={async () => {
                        await removeAuthUser();
                        await removeApiToken();
                        navigation.replace("Auth");
                    }}
                    label="Sign out"
                    labelStyle={theme.typography.regular}
                />
            </Drawer.Section>
        </SafeAreaView>
    )
}

export default DrawerContent;
