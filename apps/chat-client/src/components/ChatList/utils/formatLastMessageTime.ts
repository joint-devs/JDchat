export const formatLastMessageTime = (date: Date): string => {
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
