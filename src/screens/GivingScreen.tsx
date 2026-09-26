import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';
import type { RootTabScreenProps } from '../navigation/types';

// Giving is handled by a third-party giving platform (e.g. Tithe.ly/Pushpay) rather than
// custom in-app payment processing, per the BRD's budget and PCI-compliance constraints.
const GIVING_PARTNER_URL = 'https://give.tithe.ly/';

export default function GivingScreen({ navigation }: RootTabScreenProps<'Giving'>) {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('givingTitle')} />
      <Card>
        <Text style={styles.tithesHeading}>{t('givingTithesHeading')}</Text>
        <Text style={styles.blessing}>{t('givingBlessing')}</Text>
        <PrimaryButton label={t('givingButton')} onPress={() => Linking.openURL(GIVING_PARTNER_URL)} />
        <View style={styles.secureRow}>
          <Text style={styles.secureText}>🔒 {t('givingSecureNote')}</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.body}>{t('givingIntro')}</Text>
      </Card>

      <Card>
        <Text style={styles.title}>{t('fundraisingTitle')}</Text>
        <Text style={styles.body}>{t('fundraisingCampaign')}</Text>
        <PrimaryButton
          label={t('moreFundraising')}
          variant="outline"
          onPress={() => navigation.navigate('More', { screen: 'Fundraising' })}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.sm },
  tithesHeading: { fontSize: 20, fontWeight: '700', color: colors.text, textAlign: 'center' },
  blessing: {
    fontSize: 14,
    color: colors.accent,
    textAlign: 'center',
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
  body: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.md, lineHeight: 20 },
  secureRow: { alignItems: 'center', marginTop: spacing.sm },
  secureText: { fontSize: 12, color: colors.textMuted },
});
