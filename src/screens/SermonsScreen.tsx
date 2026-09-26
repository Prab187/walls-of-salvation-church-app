import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { latestSermons, SermonItem } from '../data/mockContent';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

const NOTES_STORAGE_PREFIX = 'wosc.sermonNotes.';

function SermonCard({ item }: { item: SermonItem }) {
  const { t, language } = useLanguage();
  const [notesOpen, setNotesOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(NOTES_STORAGE_PREFIX + item.id).then((stored) => {
      if (stored) setNotes(stored);
    });
  }, [item.id]);

  const handleChangeNotes = (value: string) => {
    setNotes(value);
    setSaved(false);
    AsyncStorage.setItem(NOTES_STORAGE_PREFIX + item.id, value).then(() => setSaved(true));
  };

  return (
    <Card>
      <Text style={styles.title}>{language === 'ta' ? item.titleTa : item.titleEn}</Text>
      <Text style={styles.meta}>
        {item.speaker} · {item.date} · {item.durationMinutes} min
      </Text>
      <View style={styles.buttonRow}>
        <PrimaryButton label={t('sermonsWatch')} onPress={() => Linking.openURL(item.youtubeUrl)} />
        <View style={{ width: spacing.sm }} />
        <PrimaryButton
          label={t('sermonsMyNotes')}
          variant="outline"
          onPress={() => setNotesOpen((open) => !open)}
        />
      </View>
      {notesOpen ? (
        <View style={styles.notesBox}>
          <TextInput
            style={styles.notesInput}
            placeholder={t('sermonsNotesPlaceholder')}
            placeholderTextColor={colors.textMuted}
            value={notes}
            onChangeText={handleChangeNotes}
            multiline
            numberOfLines={4}
          />
          {saved && notes.length > 0 ? (
            <Text style={styles.savedLabel}>{t('sermonsNotesSaved')}</Text>
          ) : null}
        </View>
      ) : null}
    </Card>
  );
}

export default function SermonsScreen() {
  const { t } = useLanguage();

  return (
    <View style={styles.screen}>
      <FlatList
        data={latestSermons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <ScreenHeader title={t('sermonsTitle')} subtitle={t('sermonsLatest')} />
        }
        renderItem={({ item }) => <SermonCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  meta: { fontSize: 13, color: colors.textMuted, marginBottom: spacing.sm },
  buttonRow: { flexDirection: 'row' },
  notesBox: { marginTop: spacing.sm },
  notesInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    padding: spacing.sm,
    minHeight: 80,
    textAlignVertical: 'top',
    color: colors.text,
    backgroundColor: colors.background,
  },
  savedLabel: { fontSize: 11, color: colors.success, marginTop: spacing.xs, textAlign: 'right' },
});
