import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Chat, ERoutes } from '@/types';
import { styles } from './ChatList.style';
import { useNavigation } from '@react-navigation/native';

interface ChatListProps {
  chats: Chat[];
}

export const ChatList: React.FC<ChatListProps> = ({ chats }) => {
  const navigate = useNavigation();

  const formatLastMessageTime = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else if (days === 1) {
      return 'Вчера';
    } else {
      return date.toLocaleDateString('ru-RU');
    }
  };

  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPressOut={() => navigate.navigate(...([ERoutes.CHAT, { chatId: item.id }] as never))}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.participants[0]?.username?.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.participants.map((p) => p.username).join(', ')}</Text>
          {item.lastMessage && (
            <Text style={styles.time}>{formatLastMessageTime(item.lastMessage.timestamp)}</Text>
          )}
        </View>
        <View style={styles.chatPreview}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage?.text || 'Нет сообщений'}
          </Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={chats}
      renderItem={renderChatItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
};
