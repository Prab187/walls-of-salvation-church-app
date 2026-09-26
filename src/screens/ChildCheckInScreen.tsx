import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

const CHECKINS_STORAGE_KEY = 'wosc.checkins';

type CheckInRecord = {
  id: string;
  childName: string;
  guardianName: string;
  pin: string;
  checkedInAt: string;
};

function generatePin() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

export default function ChildCheckInScreen() {
  const { t } = useLanguage();
  const [childName, setChildName] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [activePin, setActivePin] = useState<string | null>(null);

  const handleCheckIn = async () => {
    if (!childName.trim() || !guardianName.trim()) return;

    const record: CheckInRecord = {
      id: `${Date.now()}`,
      childName: childName.trim(),
      guardianName: guardianName.trim(),
      pin: generatePin(),
      checkedInAt: new Date().toISOString(),
    };

    const existingRaw = await AsyncStorage.getItem(CHECKINS_STORAGE_KEY);
    const existing: CheckInRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    await AsyncStorage.setItem(CHECKINS_STORAGE_KEY, JSON.stringify([...existing, record]));

    setActivePin(record.pin);
  };

  const handleReset = () => {
    setChildName('');
    setGuardianName('');
    setActivePin(null);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('checkInTitle')} />

      {activePin ? (
        <Card>
          <Text style={styles.successTitle}>{t('checkInSuccessTitle')}</Text>
          <Text style={styles.pinLabel}>{t('checkInPinLabel')}</Text>
          <Text style={styles.pinValue}>{activePin}</Text>
          <Text style={styles.pinNote}>{t('checkInPinNote')}</Text>
          <PrimaryButton label={t('checkInAnother')} variant="outline" onPress={handleReset} />
        </Card>
      ) : (
        <Card>
          <Text style={styles.body}>{t('checkInIntro')}</Text>
          <TextInput
            style={styles.input}
            placeholder={t('checkInChildName')}
            placeholderTextColor={colors.textMuted}
            value={childName}
            onChangeText={setChildName}
          />
          <TextInput
            style={styles.input}
            placeholder={t('checkInGuardianName')}
            placeholderTextColor={colors.textMuted}
            value={guardianName}
            onChangeText={setGuardianName}
          />
          <PrimaryButton label={t('checkInSubmit')} onPress={handleCheckIn} />
        </Card>
      )}
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
  successTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  pinLabel: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  pinValue: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    letterSpacing: 8,
    marginVertical: spacing.sm,
  },
  pinNote: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
});
