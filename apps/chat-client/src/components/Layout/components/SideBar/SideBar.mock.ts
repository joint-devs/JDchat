import { Chat } from '@/types';

export const mockChats: Chat[] = [
  {
    id: '1',
    participants: [
      {
        id: '2',
        username: 'Агент Bottomless',
        isOnline: true,
      },
    ],
    messages: [],
    lastMessage: {
      id: '1',
      text: 'Горбушка - это рыба?',
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
        username: 'Тайлерджон Дёрденбек',
        isOnline: false,
      },
    ],
    messages: [],
    lastMessage: {
      id: '2',
      text: 'Скажи "Карандаш"',
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
