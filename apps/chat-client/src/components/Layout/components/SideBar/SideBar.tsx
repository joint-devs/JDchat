import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Chat } from '@/types';
import { ChatList } from '@/components';
import { styles } from './SideBar.style';
import { mockChats } from './SideBar.mock';

export const SideBar = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
