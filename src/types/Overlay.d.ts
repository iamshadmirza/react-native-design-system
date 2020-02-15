import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';

interface OverlayProps {
  style?: StyleProp<ViewStyle>,
  overlayStyle?: StyleProp<ViewStyle>,
  children: React.ReactElement,
  background?: string,
  overlayBackground?: string,
  borderRadius?: number,
  width?: string | number,
  height?: string | number,
}

export const Overlay: React.FC<OverlayProps>;