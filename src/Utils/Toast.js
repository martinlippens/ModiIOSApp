import Toast from 'react-native-simple-toast';
export const toast = (m) => {
    Toast.showWithGravity(m, Toast.LONG, Toast.BOTTOM);
}