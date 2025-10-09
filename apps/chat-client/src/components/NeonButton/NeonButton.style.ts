import { StyleSheet } from 'react-native';
import { Neon80sTheme } from '../../styles/Theme';

export const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    marginVertical: 8,
    minHeight: 50,
    justifyContent: 'center',
  },
  primary: {
    borderColor: Neon80sTheme.colors.primary,
    backgroundColor: 'transparent',
  },
  secondary: {
    borderColor: Neon80sTheme.colors.secondary,
    backgroundColor: 'transparent',
  },
  accent: {
    borderColor: Neon80sTheme.colors.accent,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: Neon80sTheme.colors.text.primary,
    fontSize: 16,
    fontFamily: 'Digital7',
    textShadowColor: Neon80sTheme.colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  disabled: {
    opacity: 0.5,
  },
});
