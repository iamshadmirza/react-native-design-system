import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';

interface BadgeProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  children?: string | number,
  size?: SizeType,
  mini?: boolean,
  onPress?: () => void,
  square?: boolean,
}

export const Badge: React.FC<BadgeProps>;