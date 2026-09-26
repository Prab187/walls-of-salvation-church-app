import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { ScreenHeader } from '../components/ScreenHeader';
import { galleryAlbums } from '../data/churchData';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

export default function GalleryScreen() {
  const { t, language } = useLanguage();

  return (
    <View style={styles.screen}>
      <FlatList
        data={galleryAlbums}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <ScreenHeader title={t('galleryTitle')} subtitle={t('gallerySubtitle')} />
        }
        renderItem={({ item }) => (
          <Card>
            <View style={styles.thumbRow}>
              {[0, 1, 2].map((i) => (
                <View key={i} style={styles.thumb} />
              ))}
            </View>
            <Text style={styles.title}>{language === 'ta' ? item.titleTa : item.titleEn}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  thumbRow: { flexDirection: 'row', marginBottom: spacing.sm },
  thumb: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.border,
    borderRadius: radius.sm,
    marginRight: spacing.xs,
  },
  title: { fontSize: 15, fontWeight: '700', color: colors.text },
  date: { fontSize: 12, color: colors.textMuted, marginTop: spacing.xs },
});
