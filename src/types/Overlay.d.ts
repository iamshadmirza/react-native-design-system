import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import {RadiusType} from './size-type';

interface OverlayProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  children: React.ReactElement;
  background?: string;
  overlayBackground?: string;
  radius?: RadiusType;
  width?: string | number;
  height?: string | number;
  onPressOutside?: () => void;
}

export const Overlay: React.FC<OverlayProps>;
