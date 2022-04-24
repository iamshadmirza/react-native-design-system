import React from 'react';
import { ViewStyle, StyleProp, ViewProps } from 'react-native';

import { SizeType } from './size-type';
import { IconNode } from './icon-type';
import { colorTypes } from './colors-type';


interface ActionButtonProps extends ViewProps {
  size?: SizeType,
  onPress: () => void,
  iconColor?: string,
  color?: keyof colorTypes | string,
  icon?: IconNode,
  style?: StyleProp<ViewStyle>,
}

export const ActionButton: React.FC<ActionButtonProps>;
