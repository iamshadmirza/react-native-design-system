import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';


interface ActionButtonProps {
  size?: SizeType,
  onPress: () => void,
  iconColor?: string,
  color?: string,
  icon?: IconNode,
  style?: StyleProp<ViewStyle>,
}

export const ActionButton: React.FC<ActionButtonProps>;