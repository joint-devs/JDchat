import { screenStyles } from '@/styles/screen.style';
import { FC } from 'react';
import { View } from 'react-native';

type TChatProps = {
  route: {
    params: {
      chatId: string;
    };
  };
};

export const ChatScreen: FC<TChatProps> = ({ route }) => {
  const chatId = route.params.chatId;
  return <View style={screenStyles.screenWrapper}>{chatId}</View>;
};
