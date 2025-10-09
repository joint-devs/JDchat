import { StyleSheet } from 'react-native';
import { Neon80sTheme } from './Theme';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neon80sTheme.colors.background.primary,
  },
  screen: {
    flex: 1,
    backgroundColor: Neon80sTheme.colors.background.primary,
    padding: 16,
  },
  title: {
    ...Neon80sTheme.typography.title,
    color: Neon80sTheme.colors.text.neon,
    textAlign: 'center',
    marginVertical: 20,
  },
  scanlines: {
    ...Neon80sTheme.effects.scanlines,
  },
});
