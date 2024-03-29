import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homePage';
import Chatscreen from './screens/Chatscreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="chat" component={Chatscreen} />
    </Stack.Navigator>

    </NavigationContainer>
  );
}

