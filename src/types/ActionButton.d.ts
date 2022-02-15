import React from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {IconNode} from './icon-type';
import {SizeType} from './size-type';

interface ActionButtonProps extends ViewProps {
  size?: SizeType;
  onPress: () => void;
  iconColor?: string;
  color?: string;
  icon?: IconNode;
  style?: StyleProp<ViewStyle>;
}

export const ActionButton: React.FC<ActionButtonProps>;
