import React from 'react';
import {ViewStyle, TextStyle, StyleProp, TextInputProps} from 'react-native';

import {SizeType} from './size-type';
import {IconNode} from './icon-type';

interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textColor?: string;
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  floatingLabel?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  labelHintStyle?: StyleProp<TextStyle>;
  labelColor?: string;
  labelHintColor?: string;
  label?: string;
  labelHint?: string;
  color?: string;
  round?: boolean;
  outline?: boolean;
  error?: boolean;
  errorCaption?: string;
  size?: SizeType;
  disabled?: boolean;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  background?: string;
  outlineColor?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const Input: React.FC<InputProps>;
