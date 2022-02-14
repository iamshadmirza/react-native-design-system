import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconNode} from './icon-type';
import {SizeType} from './size-type';
import {TextAlignType} from './text-align-type';

interface HeaderProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textAlign?: TextAlignType;
  fontSize?: SizeType;
  children?: string;
  color?: string;
  leftIcon?: IconNode;
  onleftIconPress?: () => void;
  rightIcon?: IconNode;
  onRightIconPress?: () => void;
  iconStyle?: StyleProp<ViewStyle>;
  barColor?: string;
  barStyle?: 'default' | 'dark-content' | 'light-content';
}

export const Header: React.FC<HeaderProps>;
