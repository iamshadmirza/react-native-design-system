import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';


interface CircularProgressBarProps {
  activeColor: string,
  passiveColor: string,
  baseColor: string,
  width: number,
  radius: number,
  percent: number,
  duration: number,
}

export const CircularProgressBar: React.FC<CircularProgressBarProps>;
