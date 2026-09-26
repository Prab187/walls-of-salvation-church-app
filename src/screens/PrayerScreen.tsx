import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

export default function PrayerScreen() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!request.trim()) return;
    // Routes to the pastoral team once a backend/notification service is wired up (FR-10.1).
    setSubmitted(true);
    setName('');
    setRequest('');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('prayerTitle')} />
      <Card>
        <Text style={styles.body}>{t('prayerIntro')}</Text>
        <TextInput
          style={styles.input}
          placeholder={t('prayerNamePlaceholder')}
          placeholderTextColor={colors.textMuted}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder={t('prayerRequestPlaceholder')}
          placeholderTextColor={colors.textMuted}
          value={request}
          onChangeText={setRequest}
          multiline
          numberOfLines={4}
        />
        <PrimaryButton label={t('prayerSubmit')} onPress={handleSubmit} />
        {submitted ? <Text style={styles.confirmation}>{t('prayerSubmitted')}</Text> : null}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  body: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.md, lineHeight: 20 },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
    color: colors.text,
    backgroundColor: colors.surface,
  },
  multiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  confirmation: {
    marginTop: spacing.sm,
    color: colors.success,
    fontSize: 13,
  },
});
