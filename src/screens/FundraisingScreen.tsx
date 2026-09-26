import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { fundraisingCampaign } from '../data/churchData';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

export default function FundraisingScreen() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const progress = Math.min(fundraisingCampaign.raised / fundraisingCampaign.goal, 1);
  const goalLabel = `${fundraisingCampaign.currency}${fundraisingCampaign.goal.toLocaleString()}`;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('fundraisingTitle')} />

      <Card>
        <Text style={styles.campaignTitle}>{t('fundraisingCampaign')}</Text>
        <Text style={styles.verse}>“{t('fundraisingVerse')}”</Text>
        <Text style={styles.verseRef}>{t('fundraisingVerseRef')}</Text>
      </Card>

      <Card>
        <Text style={styles.raisedAmount}>
          {fundraisingCampaign.currency}
          {fundraisingCampaign.raised.toLocaleString()}
        </Text>
        <Text style={styles.raisedOf}>{t('fundraisingRaisedOf').replace('{goal}', goalLabel)}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.max(progress * 100, 2)}%` }]} />
        </View>

        <View style={styles.amountGrid}>
          {fundraisingCampaign.presetAmounts.map((amount) => (
            <Pressable
              key={amount}
              onPress={() => {
                setSelected(amount);
                setCustomAmount('');
              }}
              style={[styles.amountChip, selected === amount && styles.amountChipSelected]}
            >
              <Text
                style={[styles.amountChipLabel, selected === amount && styles.amountChipLabelSelected]}
              >
                {fundraisingCampaign.currency}
                {amount}
              </Text>
            </Pressable>
          ))}
        </View>

        <TextInput
          style={styles.customInput}
          placeholder={t('fundraisingCustomAmount')}
          placeholderTextColor={colors.textMuted}
          value={customAmount}
          onChangeText={(v) => {
            setCustomAmount(v);
            setSelected(null);
          }}
          keyboardType="numeric"
        />

        <PrimaryButton label={t('fundraisingDonateNow')} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  campaignTitle: { fontSize: 17, fontWeight: '700', color: colors.text, marginBottom: spacing.sm },
  verse: { fontSize: 14, color: colors.textMuted, fontStyle: 'italic', lineHeight: 20 },
  verseRef: { fontSize: 12, color: colors.accent, fontWeight: '600', marginTop: spacing.xs },
  raisedAmount: { fontSize: 28, fontWeight: '700', color: colors.text },
  raisedOf: { fontSize: 13, color: colors.textMuted, marginBottom: spacing.sm },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 4,
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.sm,
  },
  amountChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  amountChipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  amountChipLabel: { color: colors.text, fontWeight: '600' },
  amountChipLabelSelected: { color: '#FFFFFF' },
  customInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
    color: colors.text,
  },
});
