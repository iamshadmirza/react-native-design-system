import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';
import { TextAlignType } from './text-align-type';

interface HeaderProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  textAlign?: TextAlignType,
  fontSize?: SizeType,
  children?: string,
  color?: string,
  leftIcon?: IconNode,
  onleftIconPress?: () => void,
  rightIcon?: IconNode,
  onRightIconPress?: () => void,
  iconStyle?: StyleProp<ViewStyle>,
  barColor?: string,
  barStyle?: 'default' | 'dark-content' | 'light-content',
}

export const Header: React.FC<HeaderProps>;