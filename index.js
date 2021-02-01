/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Reactotron from 'reactotron-react-native';

AppRegistry.registerComponent(appName, () => App);
Reactotron.configure({name:'MODIIOS'})
.useReactNative()
.connect()