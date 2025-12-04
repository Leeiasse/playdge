import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const Colors = {
  primary: '#FFB7B2',    // Pastel Red/Pink
  secondary: '#B5EAD7',  // Pastel Green
  tertiary: '#E2F0CB',   // Pastel Lime
  background: '#F9F9F9', // Off White
  text: '#4A4A4A',       // Dark Grey
  textLight: '#9B9B9B',  // Light Grey
  accent: '#C7CEEA',     // Pastel Blue
  white: '#FFFFFF',
  error: '#FF9AA2',      // Pastel Red for errors
};

export const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  s: 8,
  m: 16,
  l: 24,
  round: 9999,
};

export const Typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  body: {
    fontSize: 16,
    color: Colors.text,
  },
  caption: {
    fontSize: 14,
    color: Colors.textLight,
  },
});
