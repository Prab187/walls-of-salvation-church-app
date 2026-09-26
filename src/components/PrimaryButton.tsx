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
  variant?: 'filled' | 'outline';
}) {
  const isFilled = variant === 'filled';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isFilled ? styles.filled : styles.outline,
        pressed && styles.pressed,
      ]}
    >
      <Text style={isFilled ? styles.filledLabel : styles.outlineLabel}>{label}</Text>
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
});
