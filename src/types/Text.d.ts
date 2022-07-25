import React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import {colorTypes} from './colors-type';

import {FontSizeType} from './size-type';
import {fontBaseType, fontVariantType} from './typography-type';

interface TextProps extends RNTextProps {
  size?: FontSizeType | string;
  color?: keyof colorTypes | string;
  scale?: boolean;
  fontWeight?: string;
  fontFamily?: string;
  fontBase?: fontBaseType;
  fontVariant?: fontVariantType;
}

export const Text: React.FC<TextProps>;
