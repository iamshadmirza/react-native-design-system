import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { IconNode } from './icon-type';
import { LayoutChildrenType } from './layout-children-type';
import { colorTypes } from './colors-type';

interface RadioButtonProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  children: LayoutChildrenType,
  activeId: number | string,
  iconRight?: boolean,
  color?: keyof colorTypes | string,
  textColor?: string,
  size?: SizeType,
  selectItem: (id: number | string) => void,
  checkedIcon?: IconNode,
  uncheckedIcon?: IconNode,
}

export const RadioButton: React.FC<RadioButtonProps>;
