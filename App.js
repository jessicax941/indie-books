import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loadAsync } from 'expo-font';
import React from 'react';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFonts() {
    await loadAsync({
      Inter: require('./assets/fonts/Inter-Regular.ttf'),
      EBGaramond: require('./assets/fonts/EBGaramond-Medium.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
