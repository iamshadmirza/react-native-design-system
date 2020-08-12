import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { IconNode } from './icon-type';

interface InputProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  textColor?: string,
  value?: string,
  onChangeText: (text: string) => void,
  placeholder?: string,
  floatingLabel?: boolean,
  labelStyle?: StyleProp<TextStyle>,
  labelColor?: string,
  label?: string,
  color?: string,
  round?: boolean,
  outline?: boolean,
  error?: boolean,
  errorCaption?: string,
  size?: SizeType,
  disabled?: boolean,
  leftIcon?: IconNode,
  rightIcon?: IconNode,
  background?: string,
}



export const Input: React.FC<InputProps>;