import React, {ReactElement} from 'react';
import {TextStyle, StyleProp, TextInputProps} from 'react-native';

import {RadiusType, ShadowType, SizeType} from './size-type';
import {IconNode} from './icon-type';
import {colorTypes} from './colors-type';

interface InputProps extends TextInputProps {
  textStyle?: StyleProp<TextStyle>;
  textColor?: keyof colorTypes | string;
  floatingLabel?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  labelColor?: string;
  label?: string | ReactElement | ReactElement[];
  color?: keyof colorTypes | string;
  round?: boolean;
  outline?: boolean;
  error?: boolean;
  errorCaption?: string | ReactElement | ReactElement[];
  size?: SizeType;
  disabled?: boolean;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  background?: keyof colorTypes | string;
  outlineColor?: keyof colorTypes | string;
  textAlign?: 'left' | 'center' | 'right';
  labelHintStyle?: StyleProp<TextStyle>;
  labelHintColor?: string;
  labelHint?: string | ReactElement | ReactElement[];
  shadow?: ShadowType;
  radius?: RadiusType;
}

export const Input: React.FC<InputProps>;
