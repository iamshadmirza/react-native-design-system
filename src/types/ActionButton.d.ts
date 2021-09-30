import React from 'react';
import { ViewStyle, StyleProp, ViewProps } from 'react-native';

import { SizeType } from './size-type';
import { IconNode } from './icon-type';


interface ActionButtonProps extends ViewProps {
  size?: SizeType,
  onPress: () => void,
  iconColor?: string,
  color?: string,
  icon?: IconNode,
  style?: StyleProp<ViewStyle>,
}

export const ActionButton: React.FC<ActionButtonProps>;