import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colorsType} from './colors-type';
import {SizeType} from './size-type';

interface BadgeProps extends AccessibilityProps {
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
