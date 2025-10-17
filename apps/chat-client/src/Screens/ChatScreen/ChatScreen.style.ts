import { Neon80sTheme } from '@/styles/Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  messageBox: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },

  notMyMessage: {
    justifyContent: 'flex-start',
  },

  myMessage: {
    justifyContent: 'flex-end',
  },

  messageContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    minWidth: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    backgroundColor: Neon80sTheme.colors.background.tertiary,
  },

  messageText: {
    fontSize: 16,
    color: Neon80sTheme.colors.text.secondary,
  },

  messageAuthor: {
    color: Neon80sTheme.colors.text.neon,
  },

  messageTime: {
    textAlign: 'right',
    fontSize: 12,
    color: Neon80sTheme.colors.text.neon,
  },
});
