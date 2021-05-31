import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

interface OverlayProps {
  style?: StyleProp<ViewStyle>,
  overlayStyle?: StyleProp<ViewStyle>,
  children: React.ReactElement,
  background?: string,
  overlayBackground?: string,
  borderRadius?: number,
  width?: string | number,
  height?: string | number,
  onPressOutside?: () => void
}

export const Overlay: React.FC<OverlayProps>;
