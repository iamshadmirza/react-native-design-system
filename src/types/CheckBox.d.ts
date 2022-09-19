import React, {ReactElement} from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {SizeType} from './size-type';
import {colorTypes} from './colors-type';
import {fontBaseType, fontVariantType} from './typography-type';

interface CheckBoxProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: string | ReactElement | ReactElement[];
  checked?: boolean;
  iconRight?: boolean;
  color?: string;
  textColor?: keyof colorTypes | string;
  size?: SizeType;
  onPress: () => void;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  fontBase?: fontBaseType;
  fontVariant?: fontVariantType;
}

export const CheckBox: React.FC<CheckBoxProps>;
