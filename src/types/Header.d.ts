import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconNode} from './icon-type';
import {ShadowType, SizeType} from './size-type';
import {TextAlignType} from './text-align-type';
import {colorTypes} from './colors-type';

interface HeaderProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textAlign?: TextAlignType;
  fontSize?: SizeType;
  children?: string;
  color?: keyof colorTypes | string;
  leftIcon?: IconNode;
  onleftIconPress?: () => void;
  rightIcon?: IconNode;
  onRightIconPress?: () => void;
  iconStyle?: StyleProp<ViewStyle>;
  barColor?: string;
  barStyle?: 'default' | 'dark-content' | 'light-content';
  shadow?: ShadowType;
}

export const Header: React.FC<HeaderProps>;
