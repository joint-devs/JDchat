import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { ChatsScreen } from '../../Screens/ChatScreen/ChatScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chats"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0a0a1f',
          },
          headerTintColor: '#ff00ff',
          headerTitleStyle: {
            fontFamily: 'ArcadeClassic',
          },
        }}
      >
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'ARCADE MESSENGER' }}
        /> */}
        <Stack.Screen name="Chats" component={ChatsScreen} options={{ title: 'ЧАТЫ' }} />
        {/* <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({ title: `ЧАТ ${route.params.chatId}` })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
