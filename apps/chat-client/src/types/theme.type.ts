import { TextStyle, ViewStyle } from 'react-native';

export interface NeonTheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      neon: string;
    };
    border: string;
  };
  typography: {
    title: TextStyle;
    body: TextStyle;
  };
  effects: {
    glow: {
      textShadow: string;
      boxShadow: string;
    };
    scanlines: ViewStyle;
  };
}
