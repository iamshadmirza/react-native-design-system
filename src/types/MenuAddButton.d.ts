import React from 'react';
import {ViewStyle, TextStyle, StyleProp} from 'react-native';

import {RadiusType, ShadowType, SizeType} from './size-type';

interface MenuAddButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  plusIcon?: React.ReactNode;
  minusIcon?: React.ReactNode;
  iconColor?: string;
  disabled?: boolean;
  size: SizeType;
  shadow?: ShadowType;
  radius?: RadiusType;
}

export const MenuAddButton: React.FC<MenuAddButtonProps>;
