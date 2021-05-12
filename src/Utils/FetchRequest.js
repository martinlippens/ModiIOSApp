import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Returns Fetch() instance
 *
 * @param url {String}
 * @param options {Object}
 */

export const fetchRequest = (url, options) => {
    const abort = new AbortController();
    setTimeout(() => {
        abort.abort();
    }, 30000);
    options.signal = abort.signal;
    return fetch(url, options);
}

/**
 * Returns Fetch() instance
 *
 * @param url {String}
 * @param options {Object}
 */

export const securedFetchRequest = async (url, options) => {
    const abort = new AbortController();
    setTimeout(() => {
        abort.abort();
    }, 50000);
    const token = await AsyncStorage.getItem("token");
    options['headers']['Authorization'] = `Bearer ${token}`;
    options.signal = abort.signal;
    return fetch(url, options);
}