import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Reservation from './src/screens/Reservation';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Reservation' component={Reservation} />

        {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}