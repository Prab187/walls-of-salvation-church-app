import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import EventsScreen from '../screens/EventsScreen';
import GivingScreen from '../screens/GivingScreen';
import HomeScreen from '../screens/HomeScreen';
import SermonsScreen from '../screens/SermonsScreen';
import { colors } from '../theme/theme';
import { MoreStackNavigator } from './MoreStackNavigator';
import type { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootTabNavigator() {
  const { t } = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: t('tabHome') }} />
      <Tab.Screen name="Events" component={EventsScreen} options={{ title: t('tabEvents') }} />
      <Tab.Screen name="Sermons" component={SermonsScreen} options={{ title: t('tabSermons') }} />
      <Tab.Screen name="Giving" component={GivingScreen} options={{ title: t('tabGiving') }} />
      <Tab.Screen name="More" component={MoreStackNavigator} options={{ title: t('tabMore') }} />
    </Tab.Navigator>
  );
}
