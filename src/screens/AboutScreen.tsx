import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';

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
        <Text style={styles.body}>
          Our pastoral and ministry leadership team content is managed from the admin panel and
          will appear here once published.
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
  body: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },
});
