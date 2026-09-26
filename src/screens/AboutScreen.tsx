import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { contactInfo } from '../data/churchData';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, radius, spacing } from '../theme/theme';
import type { MoreStackScreenProps } from '../navigation/types';

export default function AboutScreen({ navigation }: MoreStackScreenProps<'About'>) {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title={t('aboutTitle')} />
      <Card>
        <Text style={styles.body}>{t('aboutIntro')}</Text>
      </Card>

      <Card>
        <Image
          source={require('../../assets/church/pastor-couple.jpg')}
          style={styles.pastorPhoto}
          resizeMode="cover"
        />
        <Text style={styles.title}>{t('aboutLeadership')}</Text>
        <Text style={styles.leaderName}>
          {t('aboutPastorRole')} {t('aboutPastorName')}
        </Text>
        <Text style={styles.leaderRole}>{t('aboutPastorTitle')}</Text>
        <Text style={styles.body}>{t('aboutPastorTestimony')}</Text>
        <Text style={styles.body} onPress={() => Linking.openURL(`tel:${contactInfo.mobile}`)}>
          {t('contactPhoneLabel')}: {contactInfo.mobile}
        </Text>
        <PrimaryButton
          label={t('moreOurPeople')}
          variant="outline"
          onPress={() => navigation.navigate('OurPeople')}
        />
      </Card>

      <Card>
        <Text style={styles.title}>{t('aboutFaith')}</Text>
        <Text style={styles.body}>{t('aboutFaithBody')}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.lg },
  pastorPhoto: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: radius.md,
    marginBottom: spacing.md,
  },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  leaderName: { fontSize: 15, fontWeight: '600', color: colors.text },
  leaderRole: { fontSize: 12, color: colors.accent, fontWeight: '600', marginBottom: spacing.sm },
  body: { fontSize: 14, color: colors.textMuted, lineHeight: 20, marginBottom: spacing.md },
});
