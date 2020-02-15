import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';

interface FullScreenLoaderProps {
  loading: boolean,
  style?: StyleProp<ViewStyle>,
  children?: React.ReactElement,
  indicatorColor?: string,
  background?: string,
  size?: 'small' | 'large',
}

export const FullScreenLoader: React.FC<FullScreenLoaderProps>;