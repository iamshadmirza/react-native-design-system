import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';

interface SearchBarProps {
  indicatorColor?: string,
  loading?: boolean,
  iconColor?: string,
  onCancel?: () => void,
  rightIcon?: IconNode,
}

export const SearchBar: React.FC<SearchBarProps>;