import { StyleSheet } from 'react-native';
import { Neon80sTheme } from '@/styles/Theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
    borderWidth: 1,
  },
  ownMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Neon80sTheme.colors.background.tertiary,
    borderColor: Neon80sTheme.colors.primary,
    borderBottomRightRadius: 4,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Neon80sTheme.colors.background.secondary,
    borderColor: Neon80sTheme.colors.secondary,
    borderBottomLeftRadius: 4,
  },
  sender: {
    color: Neon80sTheme.colors.text.neon,
    fontSize: 12,
    fontFamily: 'ArcadeClassic',
    marginBottom: 4,
    textShadowColor: Neon80sTheme.colors.secondary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  text: {
    color: Neon80sTheme.colors.text.primary,
    fontSize: 16,
    fontFamily: 'Digital7',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  time: {
    color: Neon80sTheme.colors.text.secondary,
    fontSize: 10,
    fontFamily: 'Digital7',
  },
  status: {
    color: Neon80sTheme.colors.text.secondary,
    fontSize: 10,
    fontFamily: 'Digital7',
    marginLeft: 8,
  },
});
