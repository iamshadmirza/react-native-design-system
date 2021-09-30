import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { SpaceType } from './space-type';
import { LayoutChildrenType } from './layout-children-type';

interface BoxProps {
  style?: StyleProp<ViewStyle>,
  background?: string,
  space?: SpaceType,
  children: LayoutChildrenType
}

export const Box: React.FC<BoxProps>;