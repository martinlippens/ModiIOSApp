import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';


import { Provider } from 'react-redux'
import store from './store.js'
class MyMainApp extends Component {
    render() {
      return(
       
        <Provider store={store}>
          <App/>
        </Provider>
      )
    }
  }


AppRegistry.registerComponent('CleaningApp', () => MyMainApp);
console.disableYellowBox = true;