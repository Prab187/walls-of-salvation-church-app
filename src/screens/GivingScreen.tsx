import React from 'react';
import { Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';

// Giving is handled by a third-party giving platform (e.g. Tithe.ly/Pushpay) rather than
// custom in-app payment processing, per the BRD's budget and PCI-compliance constraints.
const GIVING_PARTNER_URL = 'https://give.tithe.ly/';

export default function GivingScreen() {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('givingTitle')} />
      <Card>
        <Text style={styles.body}>{t('givingIntro')}</Text>
        <PrimaryButton label={t('givingButton')} onPress={() => Linking.openURL(GIVING_PARTNER_URL)} />
      </Card>
      <Card>
        <Text style={styles.title}>{t('givingTitheOffering')}</Text>
        <Text style={styles.body}>
          {t('appName')} — {t('givingTitheOffering')}
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.sm },
  body: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.md, lineHeight: 20 },
});
