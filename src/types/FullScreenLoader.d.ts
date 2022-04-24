import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import { colorTypes } from './colors-type';

interface FullScreenLoaderProps extends AccessibilityProps {
  loading: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactElement;
  indicatorColor?: string;
  background?: keyof colorTypes | string,
  size?: 'small' | 'large';
}

export const FullScreenLoader: React.FC<FullScreenLoaderProps>;
