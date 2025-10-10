import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ERoutes, RootStackParamList } from '@/types';
import { ChatScreen } from '@/Screens/ChatScreen/ChatScreen';
import { Layout } from '../Layout/Layout';
import { MainScreen } from '@/Screens/MainScreen/MainScreen';
import { Neon80sTheme } from '@/styles/Theme';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator
          initialRouteName={ERoutes.MAIN}
          screenOptions={{
            headerStyle: {
              backgroundColor: Neon80sTheme.colors.background.secondary,
              borderBottomWidth: 1,
              borderBottomColor: Neon80sTheme.colors.background.tertiary,
            },
            headerTintColor: Neon80sTheme.colors.text.primary,
            headerTitleStyle: {
              fontFamily: 'monospace',
            },
          }}
        >
          <Stack.Screen name={ERoutes.CHAT} component={ChatScreen} />
          <Stack.Screen name={ERoutes.MAIN} component={MainScreen} />
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  );
};
