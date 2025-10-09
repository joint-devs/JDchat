import { StyleSheet } from 'react-native';
import { Neon80sTheme } from '../../styles/Theme';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Neon80sTheme.colors.background.tertiary,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Neon80sTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: Neon80sTheme.colors.text.primary,
    fontFamily: 'ArcadeClassic',
    fontSize: 18,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    color: Neon80sTheme.colors.text.primary,
    fontFamily: 'ArcadeClassic',
    fontSize: 16,
  },
  time: {
    color: Neon80sTheme.colors.text.secondary,
    fontSize: 12,
    fontFamily: 'Digital7',
  },
  chatPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    color: Neon80sTheme.colors.text.secondary,
    fontSize: 14,
    fontFamily: 'Digital7',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: Neon80sTheme.colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  unreadText: {
    color: Neon80sTheme.colors.text.primary,
    fontSize: 12,
    fontFamily: 'Digital7',
    fontWeight: 'bold',
  },
});
