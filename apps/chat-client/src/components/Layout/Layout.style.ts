import { StyleSheet } from 'react-native';
import { Neon80sTheme } from '@/styles/Theme';

export const styles = StyleSheet.create({
  childrenBox: {
    width: '80%',
    backgroundColor: Neon80sTheme.colors.background.secondary,
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Neon80sTheme.colors.background.primary,
    width: '100%',
  },
});
