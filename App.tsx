import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider } from './src/i18n/LanguageContext';
import { RootTabNavigator } from './src/navigation/RootTabNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <NavigationContainer>
          <RootTabNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
