import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { serviceTimes } from '../data/mockContent';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';
import type { RootTabScreenProps } from '../navigation/types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.appName}>{t('appName')}</Text>
      <Text style={styles.tagline}>{t('homeTagline')}</Text>
      <Text style={styles.welcomeTitle}>{t('homeWelcomeTitle')}</Text>
      <Text style={styles.welcomeSubtitle}>{t('homeWelcomeSubtitle')}</Text>

      <View style={styles.buttonRow}>
        <PrimaryButton label={t('homeJoinUs')} />
        <View style={{ height: spacing.sm }} />
        <PrimaryButton
          label={t('homeFirstTime')}
          variant="outline"
          onPress={() => navigation.navigate('More', { screen: 'Newcomer' })}
        />
      </View>

      <Card>
        <Text style={styles.cardTitle}>{t('homeServiceTimes')}</Text>
        <View style={styles.serviceRow}>
          <Text style={styles.serviceLabel}>{t('tamilServiceLabel')}</Text>
          <Text style={styles.serviceValue}>{serviceTimes.tamil}</Text>
        </View>
        <View style={styles.serviceRow}>
          <Text style={styles.serviceLabel}>{t('englishServiceLabel')}</Text>
          <Text style={styles.serviceValue}>{serviceTimes.english}</Text>
        </View>
      </Card>

      <Card>
        <View style={styles.liveHeader}>
          <View style={styles.liveDot} />
          <Text style={styles.cardTitle}>{t('homeLiveNow')}</Text>
        </View>
        <Text style={styles.verseviewNotice}>{t('verseviewNotice')}</Text>
        <PrimaryButton label={t('homeWatchLive')} variant="outline" />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  appName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 15,
    fontStyle: 'italic',
    color: colors.primary,
    marginTop: spacing.xs,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.xs,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  buttonRow: {
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  serviceLabel: {
    color: colors.textMuted,
  },
  serviceValue: {
    color: colors.text,
    fontWeight: '600',
  },
  liveHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D64545',
    marginRight: spacing.sm,
  },
  verseviewNotice: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
});
