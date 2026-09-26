import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { contactInfo } from '../data/churchData';
import { serviceTimes } from '../data/mockContent';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';
import type { RootTabScreenProps } from '../navigation/types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Image
          source={require('../../assets/church/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>{t('homeTagline')}</Text>
        <Text style={styles.welcomeTitle}>{t('homeWelcomeTitle')}</Text>
        <Text style={styles.welcomeSubtitle}>{t('homeWelcomeSubtitle')}</Text>

        <View style={styles.buttonRow}>
          <PrimaryButton label={t('homeJoinUs')} />
          <View style={{ height: spacing.sm }} />
          <PrimaryButton
            label={t('homeFirstTime')}
            variant="outlineOnDark"
            onPress={() => navigation.navigate('More', { screen: 'Newcomer' })}
          />
        </View>
      </View>

      <View style={styles.body}>
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
          <View style={styles.openingDaysPill}>
            <Text style={styles.openingDaysText}>{t('homeOpeningDays')}</Text>
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

        <Card>
          <Text style={styles.cardTitle}>{t('contactCallUs')}</Text>
          <Text
            style={styles.contactLine}
            onPress={() => navigation.navigate('More', { screen: 'Contact' })}
          >
            {contactInfo.mobile}
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: spacing.lg,
  },
  hero: {
    backgroundColor: colors.heroBackground,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    alignItems: 'flex-start',
  },
  logo: {
    width: 120,
    height: 70,
    marginBottom: spacing.sm,
  },
  tagline: {
    fontSize: 15,
    fontStyle: 'italic',
    color: colors.accent,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.onHero,
    marginTop: spacing.xs,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: colors.onHeroMuted,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  buttonRow: {
    width: '100%',
  },
  body: {
    padding: spacing.lg,
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
  openingDaysPill: {
    marginTop: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    alignSelf: 'flex-start',
  },
  openingDaysText: {
    color: '#FFFFFF',
    fontSize: 12,
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
  contactLine: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },
});
