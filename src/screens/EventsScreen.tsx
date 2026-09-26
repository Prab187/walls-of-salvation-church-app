import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { upcomingEvents } from '../data/mockContent';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';

export default function EventsScreen() {
  const { t, language } = useLanguage();

  return (
    <View style={styles.screen}>
      <FlatList
        data={upcomingEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <ScreenHeader title={t('eventsTitle')} subtitle={t('eventsUpcoming')} />
        }
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.title}>{language === 'ta' ? item.titleTa : item.titleEn}</Text>
            <Text style={styles.meta}>{item.date} · {item.location}</Text>
            <View style={styles.buttonRow}>
              <PrimaryButton label={t('eventsRegister')} variant="outline" />
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  meta: { fontSize: 13, color: colors.textMuted, marginBottom: spacing.sm },
  buttonRow: { alignItems: 'flex-start' },
});
