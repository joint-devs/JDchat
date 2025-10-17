import { api } from '@/api';
import { screenStyles } from '@/styles/screen.style';
import { sm } from '@/utils';
import { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './ChatScreen.style';

type TChatProps = {
  route: {
    params: {
      chatId: string;
    };
  };
};

export const ChatScreen: FC<TChatProps> = ({ route }) => {
  const MOCK_MESSAGES = [
    {
      text: 'Ла-ла-ла-ла',
      sender: 'Test123',
      sendTime: '12:20:30',
    },
    {
      text: 'Ла-ла-ла-ла',
      sender: 'Test',
      sendTime: '12:20:30',
    },
    {
      text: 'Ла-ла-ла-ла',
      sender: 'Test',
      sendTime: '12:20:30',
    },
    {
      text: 'Ла-ла-ла-ла',
      sender: 'Test123',
      sendTime: '12:20:30',
    },
    {
      text: 'Ла-ла-ла-ла',
      sender: 'Test',
      sendTime: '12:20:30',
    },
    {
      text: 'Ла-ла-ла-ла',
      sender: 'Test123',
      sendTime: '12:20:30',
    },
  ];
  const myName = 'Test';

  const [messages, setMessages] = useState<any[]>(MOCK_MESSAGES);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const chatId = route.params.chatId;

  const getMessages = () => {
    setIsLoading(true);
    setIsError(false);
    api
      .get('/getSomeMessages')
      .then(({ data }) => {
        setMessages(MOCK_MESSAGES);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // getMessages();
  }, []);

  return (
    <View style={screenStyles.screenWrapper}>
      {messages &&
        messages.map((message) => {
          const isMyMessage = message.sender === myName;
          return (
            <View
              style={sm(styles.messageBox, isMyMessage ? styles.myMessage : styles.notMyMessage)}
            >
              <View style={styles.messageContainer}>
                <Text style={styles.messageAuthor}>{isMyMessage ? 'you' : message.sender}</Text>
                <Text style={styles.messageText}>{message.text}</Text>
                <Text style={styles.messageTime}>{message.sendTime}</Text>
              </View>
            </View>
          );
        })}
    </View>
  );
};
