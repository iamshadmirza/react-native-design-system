import React from 'react';
import {
  ViewStyle,
  TextStyle,
  StyleProp,
  AccessibilityProps,
} from 'react-native';

import {SizeType} from './size-type';
import {WidthType} from './width-type';
import {LengthType} from './length-type';
import {IconNode} from './icon-type';

interface ButtonProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: string;
  indicatorColor?: string;
  size?: SizeType;
  width?: WidthType;
  onPress: () => void;
  color?: string;
  borderColor?: string;
  round?: boolean;
  outline?: boolean;
  transparent?: boolean;
  disabled?: boolean;
  loading?: boolean;
  tint?: boolean;
  icon?: IconNode;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  rightIconStyle?: StyleProp<ViewStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  length?: LengthType;
}

export const Button: React.FC<ButtonProps>;
