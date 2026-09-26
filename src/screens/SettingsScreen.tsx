import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';
import type { Language } from '../i18n/translations';

export default function SettingsScreen() {
  const { t, language, setLanguage } = useLanguage();

  const options: { key: Language; label: string }[] = [
    { key: 'en', label: t('settingsLanguageEnglish') },
    { key: 'ta', label: t('settingsLanguageTamil') },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('settingsTitle')} />
      <Text style={styles.sectionLabel}>{t('settingsLanguage')}</Text>
      <View style={styles.optionsRow}>
        {options.map((option) => {
          const selected = option.key === language;
          return (
            <Pressable
              key={option.key}
              onPress={() => setLanguage(option.key)}
              style={[styles.option, selected && styles.optionSelected]}
            >
              <Text style={[styles.optionLabel, selected && styles.optionLabelSelected]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  optionsRow: { flexDirection: 'row' },
  option: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginRight: spacing.sm,
  },
  optionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionLabel: { color: colors.text, fontWeight: '600' },
  optionLabelSelected: { color: '#FFFFFF' },
});
