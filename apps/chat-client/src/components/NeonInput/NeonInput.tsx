import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Neon80sTheme } from '@/styles/Theme';
import { styles } from './NeonInput.style';

interface NeonInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const NeonInput: React.FC<NeonInputProps> = ({ label, error, style, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={Neon80sTheme.colors.text.secondary}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
