import React, {ReactNode} from 'react';
import {ViewStyle, TextStyle, StyleProp, ViewProps} from 'react-native';

import {FontSizeType, RadiusType, ShadowType, SizeType} from './size-type';
import {LengthType} from './length-type';
import {IconNode} from './icon-type';
import {colorTypes} from './colors-type';
import {fontBaseType, fontVariantType} from './typography-type';

interface ButtonProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: string | number | ReactNode;
  indicatorColor?: string;
  size?: SizeType;
  textSize?: FontSizeType;
  onPress: () => void;
  color?: keyof colorTypes | string;
  textColor?: keyof colorTypes | string;
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
  fontBase?: fontBaseType;
  fontVariant?: fontVariantType;
}

export const Button: React.FC<ButtonProps>;
