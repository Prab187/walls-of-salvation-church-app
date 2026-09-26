import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing } from '../theme/theme';

export function PrimaryButton({
  label,
  onPress,
  variant = 'filled',
}: {
  label: string;
  onPress?: () => void;
  variant?: 'filled' | 'outline' | 'outlineOnDark';
}) {
  const isFilled = variant === 'filled';
  const isOutlineOnDark = variant === 'outlineOnDark';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isFilled ? styles.filled : isOutlineOnDark ? styles.outlineOnDark : styles.outline,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={isFilled ? styles.filledLabel : isOutlineOnDark ? styles.outlineOnDarkLabel : styles.outlineLabel}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  outlineOnDark: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.accent,
  },
  pressed: {
    opacity: 0.8,
  },
  filledLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  outlineLabel: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },
  outlineOnDarkLabel: {
    color: colors.accent,
    fontWeight: '600',
    fontSize: 15,
  },
});
