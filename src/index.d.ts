// Type definitions for react-native-design-system
// Project: https://github.com/iamshadmirza/react-native-design-system
// Definitions by:
// Bhavesh Daswani <https://github.com/bhaveshdaswani93>
// TypeScript Version: 3.7.5
// Definition updated by Shad on 30 September

import * as React from 'react';
import {themeType} from './types/theme';
import {colorsType} from './types/colors-type';
export * from './types/Button';
export * from './types/MenuAddButton';
export * from './types/IconButton';
export * from './types/ActionButton';
export * from './types/Avatar';
export * from './types/Card';
export * from './types/Badge';
export * from './types/CheckBox';
export * from './types/CircularProgressBar';
export * from './types/FullScreenLoader';
export * from './types/Header';
export * from './types/Input';
export * from './types/Box';
export * from './types/Stack';
export * from './types/ListItem';
export * from './types/OverLay';
export * from './types/SearchBar';
export * from './types/Text';
export * from './types/RadioItem';
export * from './types/RadioButton';
export * from './types/Flex';
export * from './types/StackList';
export * from './types/Spacer';
export * from './types/DismissKeyboard';
export * from './types/Image';

export let theme: themeType;
export let colors: colorsType;

export const ThemeProvider: React.FC<{
  theme: themeType;
  colorMode?: 'light' | 'dark';
  children: React.ReactElement | Array<any>;
}>;

export const useThemeContext: () => typeof theme;
export const useThemeMode: () => {
  isDarkMode: boolean;
  toggleDarkMode: (mode?: 'light' | 'dark') => void;
};
