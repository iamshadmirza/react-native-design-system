import React from 'react';
import {ViewStyle, TextStyle, StyleProp, TextInputProps} from 'react-native';

import {SizeType} from './size-type';
import {IconNode} from './icon-type';
import {colorTypes} from './colors-type';

interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textColor?: keyof colorTypes | string;
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  floatingLabel?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  labelColor?: string;
  label?: string;
  color?: keyof colorTypes | string;
  round?: boolean;
  outline?: boolean;
  error?: boolean;
  errorCaption?: string;
  size?: SizeType;
  disabled?: boolean;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  background?: keyof colorTypes | string;
  outlineColor?: keyof colorTypes | string;
  textAlign?: 'left' | 'center' | 'right';
  labelHintStyle?: StyleProp<TextStyle>;
  labelHintColor?: string;
  labelHint?: string;
}

export const Input: React.FC<InputProps>;
