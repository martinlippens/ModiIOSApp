import AsyncStorage from "@react-native-async-storage/async-storage"

export const userID = async () => {
    const uid = await AsyncStorage.getItem('uid');
    if (uid) {
        return uid;
    } else {
        return null
    }
}