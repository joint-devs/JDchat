import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import { styles } from './MessageBubble.style';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={[styles.container, message.isOwn ? styles.ownMessage : styles.otherMessage]}>
      {!message.isOwn && <Text style={styles.sender}>{message.sender.username}</Text>}
      <Text style={styles.text}>{message.text}</Text>
      <View style={styles.footer}>
        <Text style={styles.time}>{formatTime(message.timestamp)}</Text>
        {message.isOwn && <Text style={styles.status}>{message.status}</Text>}
      </View>
    </View>
  );
};
