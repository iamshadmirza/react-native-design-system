import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';

interface FullScreenLoaderProps extends AccessibilityProps {
  loading: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactElement;
  indicatorColor?: string;
  background?: string;
  size?: 'small' | 'large';
}

export const FullScreenLoader: React.FC<FullScreenLoaderProps>;
