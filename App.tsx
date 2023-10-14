import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from './src/Presentation/views/home/Home'
import { OsListScreen } from './src/Presentation/views/oslist/OsList'
import { PendingChatListScreen } from './src/Presentation/views/pendingChatList/PendingChatList'

export type RootStackParamList = {
  HomeScreen: undefined,
  OsListScreen: undefined,
  PendingChatListScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="OsListScreen"
          component={OsListScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#374151'
            },
            title: 'Ordenes de Servicio'
          }}
        />

        <Stack.Screen
          name="PendingChatListScreen"
          component={PendingChatListScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#F52D56'
            },
            title: 'Chats pendientes'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

