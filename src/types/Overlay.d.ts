import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';

interface OverlayProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  children: React.ReactElement;
  background?: string;
  overlayBackground?: string;
  borderRadius?: number;
  width?: string | number;
  height?: string | number;
  onPressOutside?: () => void;
}

export const Overlay: React.FC<OverlayProps>;
