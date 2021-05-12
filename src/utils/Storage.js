import RNAsyncStorage from '@react-native-async-storage/async-storage';

/* eslint-disable class-methods-use-this */
class AsyncStorage {
  async get(key) {
    let value = await RNAsyncStorage.getItem(key);
    if (value) {
      value = JSON.parse(value);
    }
    return value;
  }

  async set(key, value) {
    await RNAsyncStorage.setItem(key, JSON.stringify(value));
  }

  async remove(key) {
    await RNAsyncStorage.removeItem(key);
  }

  async clear() {
    await RNAsyncStorage.clear();
  }
}

// Create a singleton instance
const Storage = new AsyncStorage();
Object.freeze(Storage);

export default Storage;
