import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { teamMembers } from '../data/churchData';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

export default function OurPeopleScreen() {
  const { t } = useLanguage();

  return (
    <View style={styles.screen}>
      <FlatList
        data={teamMembers}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <ScreenHeader title={t('ourPeopleTitle')} subtitle={t('ourPeopleSubtitle')} />
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.photo} style={styles.photo} resizeMode="cover" />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  row: { justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
  },
  role: {
    fontSize: 12,
    color: colors.textMuted,
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.sm,
  },
});
