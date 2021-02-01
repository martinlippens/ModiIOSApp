
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  WebView,
} from 'react-native';
import { connect } from 'react-redux';
import AppScreen from './src'
import { Provider } from 'react-redux';
import store from './store'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
      <AppScreen />
      </Provider>
    );
  }
}

export default App


