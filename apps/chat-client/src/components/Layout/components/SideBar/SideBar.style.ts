import { StyleSheet } from 'react-native';
import { Neon80sTheme } from '@/styles/Theme';

export const styles = StyleSheet.create({
  sideBar: {
    width: '20%',
    backgroundColor: Neon80sTheme.colors.background.secondary,
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: Neon80sTheme.colors.background.tertiary,
  },
  screen: {
    flex: 1,
    backgroundColor: Neon80sTheme.colors.background.primary,
    padding: 16,
  },
  title: {
    color: Neon80sTheme.colors.text.primary,
    fontFamily: 'monospace',
    textAlign: 'center',
    marginVertical: 20,
  },
});
