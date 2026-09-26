import React, { useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { contactInfo } from '../data/churchData';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';

export default function ContactScreen() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!message.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('contactTitle')} subtitle={t('contactWelcome')} />

      <Card>
        <Text style={styles.label}>{t('contactCallUs')}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(`tel:${contactInfo.mobile}`)}>
          Mob: {contactInfo.mobile}
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL(`tel:${contactInfo.telephone}`)}>
          Tel: {contactInfo.telephone}
        </Text>
      </Card>

      <Card>
        <Text style={styles.label}>{t('contactEmailUs')}</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(`mailto:${contactInfo.emailPrayer}`)}
        >
          {contactInfo.emailPrayer}
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL(`mailto:${contactInfo.emailInfo}`)}>
          {contactInfo.emailInfo}
        </Text>
      </Card>

      <Card>
        <Text style={styles.label}>{t('contactAddress')}</Text>
        <Text style={styles.addressName}>{contactInfo.addressName}</Text>
        {contactInfo.addressLines.map((line) => (
          <Text key={line} style={styles.body}>
            {line}
          </Text>
        ))}
      </Card>

      <View style={styles.openingCard}>
        <Text style={styles.openingTitle}>{t('contactOpeningDays')}</Text>
        <Text style={styles.openingBody}>{t('contactOpeningDaysBody')}</Text>
      </View>

      <Card>
        <Text style={styles.label}>{t('contactFormTitle')}</Text>
        <TextInput
          style={styles.input}
          placeholder={t('contactFormName')}
          placeholderTextColor={colors.textMuted}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={t('contactFormEmail')}
          placeholderTextColor={colors.textMuted}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder={t('contactFormMessage')}
          placeholderTextColor={colors.textMuted}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <PrimaryButton label={t('contactFormSubmit')} onPress={handleSubmit} />
        {submitted ? <Text style={styles.confirmation}>{t('contactFormSubmitted')}</Text> : null}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  label: { fontSize: 13, fontWeight: '700', color: colors.primary, marginBottom: spacing.sm },
  link: { fontSize: 14, color: colors.text, marginBottom: spacing.xs },
  addressName: { fontSize: 14, fontWeight: '600', color: colors.text, marginBottom: spacing.xs },
  body: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },
  openingCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  openingTitle: { color: '#FFFFFF', fontWeight: '700', fontSize: 13, marginBottom: spacing.xs },
  openingBody: { color: '#FFFFFF', fontSize: 13 },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
    color: colors.text,
    backgroundColor: colors.background,
  },
  multiline: { minHeight: 96, textAlignVertical: 'top' },
  confirmation: { marginTop: spacing.sm, color: colors.success, fontSize: 13 },
});
