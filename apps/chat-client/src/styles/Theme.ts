/* eslint-disable @typescript-eslint/no-explicit-any */
import { NeonTheme } from '../types';

export const Neon80sTheme: NeonTheme = {
  colors: {
    primary: '#ff00ff',
    secondary: '#00ffff',
    accent: '#ffff00',
    background: {
      primary: '#0a0a1f',
      secondary: '#1a1a2fff',
      tertiary: '#2a2a3f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      neon: '#ff00ff',
    },
    border: '#ff00ff',
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
