import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { SpaceType } from './space-type';
import { AlignType } from './align-type';
import { LayoutChildrenType } from './layout-children-type';

interface CardProps extends ViewStyle {
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