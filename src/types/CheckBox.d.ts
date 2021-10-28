import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { colorTypes } from './colors-type';

import { SizeType } from './size-type';

interface CheckBoxProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  children: string,
  checked?: boolean,
  iconRight?: boolean,
  color?: string,
  textColor?: keyof colorTypes | string,
  size?: SizeType,
  onPress: () => void,
  checkedIcon?: React.ReactElement,
  uncheckedIcon?: React.ReactElement,
}

export const CheckBox: React.FC<CheckBoxProps>;
