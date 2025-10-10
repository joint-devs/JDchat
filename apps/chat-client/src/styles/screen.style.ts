import { Neon80sTheme } from '@/styles/Theme';
import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: Neon80sTheme.colors.background.secondary,
    height: '100%',
    color: Neon80sTheme.colors.text.primary,
    fontFamily: 'monospace',
    padding: 10,
  },
});
