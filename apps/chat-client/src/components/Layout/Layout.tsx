import { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles } from './Layout.style';
import { SideBar } from './components/SideBar/SideBar';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.layout}>
      <SideBar />
      <View style={styles.childrenBox}>{children}</View>
    </View>
  );
};
