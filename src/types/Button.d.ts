import React from 'react';
import {
  ViewStyle,
  TextStyle,
  StyleProp,
  AccessibilityProps,
} from 'react-native';

import {RadiusType, ShadowType, SizeType} from './size-type';
import {LengthType} from './length-type';
import {IconNode} from './icon-type';
import {colorTypes} from './colors-type';

interface ButtonProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: string | ReactElement | ReactElement[];
  indicatorColor?: string;
  size?: SizeType;
  onPress: () => void;
  color?: keyof colorTypes | string;
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
  radius?: RadiusType;
  shadow?: ShadowType;
}

export const Button: React.FC<ButtonProps>;
