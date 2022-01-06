import React from 'react';
import {TextProps as RNTextProps} from 'react-native';

import {SizeType} from './size-type';

interface TextProps extends RNTextProps {
  size?: SizeType | string;
  color?: string;
  scale?: boolean;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const Text: React.FC<TextProps>;
