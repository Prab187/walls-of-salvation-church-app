import React from 'react';
import { Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';

// Pastoral/contact details confirmed from the church's existing site
// (brentwoodtamilchurch.com) — replace with CMS-managed content once available.
const PASTOR_PHONE = '+44 7340322921';

export default function AboutScreen() {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('aboutTitle')} />
      <Card>
        <Text style={styles.title}>{t('aboutHistory')}</Text>
        <Text style={styles.body}>
          Walls of Salvation Church has served the Tamil and English-speaking community of
          Brentwood, building a home for worship, fellowship, and spiritual growth.
        </Text>
      </Card>
      <Card>
        <Text style={styles.title}>{t('aboutLeadership')}</Text>
        <Text style={styles.leaderName}>
          {t('aboutPastorRole')} {t('aboutPastorName')}
        </Text>
        <Text style={styles.body} onPress={() => Linking.openURL(`tel:${PASTOR_PHONE}`)}>
          {t('contactPhoneLabel')}: {PASTOR_PHONE}
        </Text>
      </Card>
      <Card>
        <Text style={styles.title}>{t('aboutFaith')}</Text>
        <Text style={styles.body}>
          Our full statement of faith, available in both Tamil and English, will appear here.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.sm },
  leaderName: { fontSize: 14, fontWeight: '600', color: colors.text, marginBottom: spacing.xs },
  body: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },
});
