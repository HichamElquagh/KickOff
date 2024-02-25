import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import matches from './src/screens/matches';
import Navigation from './src/components/Navigation';
import Matches from './src/screens/AllMatches';
import MatchDetail from './src/screens/MatchDetail';
import AllPlayers from './src/screens/AllPlayers';
import PlayerDetail from './src/screens/PlayerDetail';
import {DataProvider} from './context/DataProvider'
import Favorites from './src/screens/Favorites';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={ {headerShown:false} } component={Matches}  />
      <Stack.Screen name="matchdetails" options={ {headerShown:false} } component={MatchDetail} />
      <Stack.Screen name="navigation" options={ {headerShown:false} } component={Navigation} />
      <Stack.Screen name="allplayers" options={ {headerShown:false} } component={AllPlayers} />
      <Stack.Screen name="playerdetails" options={ {headerShown:false} } component={PlayerDetail} />
      <Stack.Screen name="Favorites" options={ {headerShown:false} } component={Favorites} />
    </Stack.Navigator>
    </DataProvider>
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
