/* eslint-disable @typescript-eslint/no-explicit-any */
import { NeonTheme } from '../types';

export const Neon80sTheme: NeonTheme = {
  colors: {
    primary: '#aa28aaff',
    secondary: '#2897aaff',
    accent: '#aa9d28ff',
    background: {
      primary: '#000000ff',
      secondary: '#0a0a0aff',
      tertiary: '#1d1d1fff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      neon: '#aa28aaff',
    },
    border: '#aa28aaff',
  },
  typography: {
    title: {
      fontFamily: 'ArcadeClassic',
      fontSize: 24,
      color: '#ffffff',
    },
    body: {
      fontFamily: 'Digital7',
      fontSize: 16,
      color: '#ffffff',
    },
  },
  effects: {
    glow: {
      textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
      boxShadow: '0 0 10px currentColor, 0 0 20px currentColor',
    },
    scanlines: {
      backgroundColor: 'transparent',
      backgroundImage: `linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 50%
      )`,
      backgroundSize: '100% 4px',
    } as any,
  },
};
