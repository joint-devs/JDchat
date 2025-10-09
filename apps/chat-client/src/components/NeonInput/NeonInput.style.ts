import { StyleSheet } from 'react-native';
import { Neon80sTheme } from '../../styles/Theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    color: Neon80sTheme.colors.text.neon,
    fontFamily: 'ArcadeClassic',
    marginBottom: 4,
    textShadowColor: Neon80sTheme.colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: Neon80sTheme.colors.primary,
    borderRadius: 8,
    padding: 12,
    color: Neon80sTheme.colors.text.primary,
    backgroundColor: Neon80sTheme.colors.background.secondary,
    fontFamily: 'Digital7',
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff0000',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Digital7',
  },
});
