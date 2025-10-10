import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Chat } from '@/types';
import { ChatList } from '@/components';
import { styles } from './SideBar.style';

export const SideBar = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Заменить на реальные данные
    const mockChats: Chat[] = [
      {
        id: '1',
        participants: [
          {
            id: '2',
            username: 'Player2',
            isOnline: true,
          },
        ],
        messages: [],
        lastMessage: {
          id: '1',
          text: 'Привет! Как дела?',
          sender: {
            id: '2',
            username: 'Player2',
            isOnline: true,
          },
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          isOwn: false,
          status: 'delivered',
        },
        unreadCount: 2,
      },
      {
        id: '2',
        participants: [
          {
            id: '3',
            username: 'GamerX',
            isOnline: false,
          },
        ],
        messages: [],
        lastMessage: {
          id: '2',
          text: 'Готов к игре?',
          sender: {
            id: '1',
            username: 'You',
            isOnline: true,
          },
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
          isOwn: true,
          status: 'read',
        },
        unreadCount: 0,
      },
    ];

    setChats(mockChats);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View style={styles.sideBar}>
      <ChatList chats={chats} />
    </View>
  );
};
