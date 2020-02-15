import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';
import { SpaceType } from './space-type';
import { AlignType } from './align-type';
import { LayoutChildrenType } from './layout-children-type';

interface CardProps {
  row?: boolean,
  style?: StyleProp<ViewStyle>,
  space?: SpaceType,
  children: LayoutChildrenType,
  horizontal?: boolean,
  vertical?: boolean,
  align?: AlignType,
  shadow?: boolean,
}

export const Card: React.FC<CardProps>;