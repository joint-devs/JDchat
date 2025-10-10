import { StyleSheet } from 'react-native';
import { Neon80sTheme } from './Theme';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neon80sTheme.colors.background.secondary,
  },
  scanlines: {
    ...Neon80sTheme.effects.scanlines,
  },
});
