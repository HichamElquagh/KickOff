import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import matches from './src/screens/matches';
import Navigation from './src/components/Navigation';
import Matches from './src/screens/AllMatches';
import MatchDeta from './src/components/ListOfMatches';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={ {headerShown:false} } component={Matches}  />
      <Stack.Screen name="matchdetails" options={ {headerShown:false} } component={MatchDeta} />
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
