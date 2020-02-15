import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';
import { LayoutChildrenType } from './layout-children-type';

interface RadioButtonProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  children: LayoutChildrenType,
  activeId: number | string,
  iconRight?: boolean,
  color?: string,
  textColor?: string,
  size?: SizeType,
  selectItem: (id: number | string) => void,
  checkedIcon?: IconNode,
  uncheckedIcon?: IconNode,
}

export const RadioButton: React.FC<RadioButtonProps>;