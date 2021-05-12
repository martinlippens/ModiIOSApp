import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StatusBar, Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/component/Theme/Theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack, Drawer } from "./src/Navigation/index";
import { Start, Welcome } from './src/component/index';

const Stack = createStackNavigator();
const Papertheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.color.primary,
    accent: theme.color.secondary
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  componentDidMount() {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(theme.color.primary);
      StatusBar.setBarStyle("light-content")
    } else {
      StatusBar.setNetworkActivityIndicatorVisible(true);
    }
  }
  render() {
    const { loggedIn } = this.state;
    return (
      <PaperProvider theme={Papertheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ animationEnabled: true, animationTypeForReplace: "push", }}
              headerMode="none"
              initialRouteName="Start"
            >
              <Stack.Screen component={Start} name="Start" />
              <Stack.Screen component={Welcome} name="Welcome" />
              <Stack.Screen name="Main" component={Drawer} />
              <Stack.Screen name="Auth" component={AuthStack} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}

export default App;