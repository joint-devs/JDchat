export enum ERoutes {
  MAIN = 'Main',
  LOGIN = 'Login',
  CHAT = 'Chat',
  PROFILE = 'profile',
  REGISTER = 'Register',
}

export type RootStackParamList = {
  [ERoutes.LOGIN]: undefined;
  [ERoutes.REGISTER]: undefined;
  [ERoutes.CHAT]: { chatId: string };
  [ERoutes.MAIN]: undefined;
  [ERoutes.PROFILE]: undefined;
};
