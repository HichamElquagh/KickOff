import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import matches from './src/screens/matches';
import Navigation from './src/components/Navigation';
import matches from './src/screens/GalileoDesign';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="nav" component={Navigation} /> */}
      <Stack.Screen name="Home" options={ {headerShown:false} } component={matches} />
    </Stack.Navigator>
    <Navigation />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
