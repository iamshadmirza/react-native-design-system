import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colorsType} from './colors-type';
import {RadiusType, SizeType} from './size-type';

interface BadgeProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: string | number;
  color?: keyof colorsType | string;
  size?: SizeType;
  mini?: boolean;
  onPress?: () => void;
  square?: boolean;
  radius?: RadiusType;
}

export const Badge: React.FC<BadgeProps>;
