import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { colorsType } from './colors-type';

interface BadgeProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: string | number;
  color?: colorsType | string;
  size?: SizeType;
  mini?: boolean;
  onPress?: () => void;
  square?: boolean;
}

export const Badge: React.FC<BadgeProps>;