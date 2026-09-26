import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, spacing } from '../theme/theme';

export default function NewcomerScreen() {
  const { t, language } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader
        title={t('newcomerTitle')}
        subtitle={language === 'ta' ? undefined : t('newcomerTamilTitle')}
      />
      <Card>
        <Text style={styles.body}>{t('newcomerIntro')}</Text>
      </Card>
      <Card>
        <Text style={styles.title}>{t('newcomerWhatToExpect')}</Text>
        <Text style={styles.body}>{t('newcomerWhatToExpectBody')}</Text>
      </Card>
      <Card>
        <Text style={styles.title}>{t('newcomerKidsYouth')}</Text>
        <Text style={styles.body}>{t('newcomerKidsYouthBody')}</Text>
      </Card>
      <PrimaryButton label={t('newcomerContactUs')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.sm },
  body: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },
});
