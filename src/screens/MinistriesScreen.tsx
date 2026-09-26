import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';
import type { TranslationKey } from '../i18n/translations';

export default function MinistriesScreen() {
  const { t } = useLanguage();

  const ministries: TranslationKey[] = [
    'ministriesChildren',
    'ministriesYouth',
    'ministriesWomen',
    'ministriesMen',
    'ministriesPrayerGroups',
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('ministriesTitle')} />
      {ministries.map((key) => (
        <Card key={key}>
          <Text style={styles.title}>{t(key)}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text },
});
