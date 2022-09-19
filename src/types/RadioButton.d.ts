import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconNode} from './icon-type';
import {LayoutChildrenType} from './layout-children-type';
import {SizeType} from './size-type';
import { colorTypes } from './colors-type';

interface RadioButtonProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: LayoutChildrenType;
  activeId: number | string;
  iconRight?: boolean;
  color?: keyof colorTypes | string,
  textColor?:  keyof colorTypes | string,
  size?: SizeType;
  selectItem: (id: number | string) => void;
  checkedIcon?: IconNode;
  uncheckedIcon?: IconNode;
}

export const RadioButton: React.FC<RadioButtonProps>;
