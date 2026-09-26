import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import AboutScreen from '../screens/AboutScreen';
import MinistriesScreen from '../screens/MinistriesScreen';
import MoreMenuScreen from '../screens/MoreMenuScreen';
import NewcomerScreen from '../screens/NewcomerScreen';
import PrayerScreen from '../screens/PrayerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { colors } from '../theme/theme';
import type { MoreStackParamList } from './types';

const Stack = createNativeStackNavigator<MoreStackParamList>();

export function MoreStackNavigator() {
  const { t } = useLanguage();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="MoreMenu" component={MoreMenuScreen} options={{ title: t('moreTitle') }} />
      <Stack.Screen name="Newcomer" component={NewcomerScreen} options={{ title: t('newcomerTitle') }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: t('aboutTitle') }} />
      <Stack.Screen
        name="Ministries"
        component={MinistriesScreen}
        options={{ title: t('ministriesTitle') }}
      />
      <Stack.Screen name="Prayer" component={PrayerScreen} options={{ title: t('prayerTitle') }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t('settingsTitle') }} />
    </Stack.Navigator>
  );
}
