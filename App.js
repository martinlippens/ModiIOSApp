
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  WebView
} from 'react-native';
import { connect } from 'react-redux';
import AppScreen from './src'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <AppScreen />
    );
  }
}

export default App


