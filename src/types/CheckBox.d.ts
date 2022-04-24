import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {SizeType} from './size-type';
import { colorTypes } from './colors-type';

interface CheckBoxProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: string;
  checked?: boolean;
  iconRight?: boolean;
  color?: string;
  textColor?: keyof colorTypes | string,
  size?: SizeType;
  onPress: () => void;
  checkedIcon?: React.ReactElement;
  uncheckedIcon?: React.ReactElement;
}

export const CheckBox: React.FC<CheckBoxProps>;
