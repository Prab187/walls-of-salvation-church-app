import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';
import type { MoreStackScreenProps } from '../navigation/types';

export default function MoreMenuScreen({ navigation }: MoreStackScreenProps<'MoreMenu'>) {
  const { t } = useLanguage();

  const items: { label: string; screen: 'Newcomer' | 'About' | 'Ministries' | 'Prayer' | 'Settings' }[] = [
    { label: t('moreNewcomer'), screen: 'Newcomer' },
    { label: t('moreAbout'), screen: 'About' },
    { label: t('moreMinistries'), screen: 'Ministries' },
    { label: t('morePrayer'), screen: 'Prayer' },
    { label: t('moreSettings'), screen: 'Settings' },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('moreTitle')} />
      <View>
        {items.map((item) => (
          <Pressable
            key={item.screen}
            style={styles.row}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.rowLabel}>{item.label}</Text>
            <Text style={styles.chevron}>{'>'}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  rowLabel: { fontSize: 15, fontWeight: '600', color: colors.text },
  chevron: { color: colors.textMuted },
});
