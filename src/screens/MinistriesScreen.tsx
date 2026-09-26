import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { ministries } from '../data/churchData';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';
import type { MoreStackScreenProps } from '../navigation/types';

export default function MinistriesScreen({ navigation }: MoreStackScreenProps<'Ministries'>) {
  const { t } = useLanguage();

  return (
    <View style={styles.screen}>
      <FlatList
        data={ministries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <ScreenHeader title={t('ministriesTitle')} subtitle={t('ministriesSubtitle')} />
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardRow}>
              {item.image ? (
                <Image source={item.image} style={styles.image} resizeMode="cover" />
              ) : (
                <View style={styles.imageFallback}>
                  <Text style={styles.imageFallbackText}>🙏</Text>
                </View>
              )}
              <View style={styles.cardBody}>
                <Text style={styles.name}>{t(item.nameKey)}</Text>
                <Text style={styles.schedule}>{t(item.scheduleKey)}</Text>
                <Text style={styles.location}>{t(item.locationKey)}</Text>
              </View>
            </View>
            {item.id === 'sunday-school' ? (
              <View style={styles.ctaRow}>
                <PrimaryButton
                  label={t('ministriesCheckInCta')}
                  variant="outline"
                  onPress={() => navigation.navigate('CheckIn')}
                />
              </View>
            ) : null}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  cardRow: {
    flexDirection: 'row',
  },
  image: {
    width: 96,
    height: 120,
  },
  imageFallback: {
    width: 96,
    height: 120,
    backgroundColor: colors.heroBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFallbackText: {
    fontSize: 32,
  },
  cardBody: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  name: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  schedule: { fontSize: 13, color: colors.primary, fontWeight: '600', marginBottom: spacing.xs },
  location: { fontSize: 12, color: colors.textMuted },
  ctaRow: { padding: spacing.md, paddingTop: 0 },
});
