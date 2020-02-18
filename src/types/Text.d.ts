import React from 'react';
import { TextStyle, StyleProp, TextProps } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';

interface TextProps {
  style?: StyleProp<TextStyle>,
  children: TextProps,
  size?: SizeType,
  color?: string,
  scale?: boolean,
  fontWeight?: string,
}

export const Text: React.FC<TextProps>;