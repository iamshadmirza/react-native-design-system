import React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import {colorTypes} from './colors-type';

import {FontSizeType} from './size-type';

interface TextProps extends RNTextProps {
  size?: FontSizeType | string;
  color?: keyof colorTypes | string;
  scale?: boolean;
  fontWeight?: string;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const Text: React.FC<TextProps>;
