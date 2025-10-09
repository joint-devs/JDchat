import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ChatList } from '../../components/ChatList/ChatList';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { Chat, RootStackParamList } from '../../types';

type ChatsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Chats'>;

interface ChatsScreenProps {
  navigation: ChatsScreenNavigationProp;
}

export const ChatsScreen: React.FC<ChatsScreenProps> = ({ navigation }) => {
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

  const handleChatPress = (chat: Chat) => {
    navigation.navigate('Chat', { chatId: chat.id });
  };

  if (loading) {
    return (
      <View style={GlobalStyles.screen}>
        <Text style={GlobalStyles.title}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View style={GlobalStyles.screen}>
      <Text style={GlobalStyles.title}>АРКАДНЫЕ ЧАТЫ</Text>
      <ChatList chats={chats} onChatPress={handleChatPress} />
    </View>
  );
};
