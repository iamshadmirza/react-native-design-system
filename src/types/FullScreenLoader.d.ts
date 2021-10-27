import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

interface FullScreenLoaderProps {
  loading: boolean,
  style?: StyleProp<ViewStyle>,
  children?: React.ReactElement,
  indicatorColor?: string,
  background?: string,
  size?: 'small' | 'large',
}

export const FullScreenLoader: React.FC<FullScreenLoaderProps>;
