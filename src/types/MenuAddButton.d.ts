import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';

interface MenuAddButtonProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  count: number,
  onIncrement: () => void,
  onDecrement: () => void,
  plusIcon?: React.ReactElement,
  minusIcon?: React.ReactElement,
  iconColor?: string,
  disabled?: boolean,
  size: SizeType,
}

export const MenuAddButton: React.FC<MenuAddButtonProps>;