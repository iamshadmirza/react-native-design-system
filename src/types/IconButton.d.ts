import React from 'react';
import {
  ViewStyle,
  TextStyle,
  StyleProp,
  AccessibilityProps,
} from 'react-native';

import {RadiusType, ShadowType, SizeType} from './size-type';
import {IconNode} from './icon-type';
import {colorTypes} from './colors-type';

interface IconButtonProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: IconNode;
  size?: SizeType;
  background: colorTypes;
  color: colorTypes;
  onPress: () => void;
  onLongPress: () => void;
  rounded?: boolean;
  outline?: boolean;
  transparent?: boolean;
  disabled?: boolean;
  radius?: RadiusType;
  shadow?: ShadowType;
}

export const IconButton: React.FC<IconButtonProps>;
