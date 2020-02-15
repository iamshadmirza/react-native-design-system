import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { SpaceType } from './space-type';
import { IconNode } from './icon-type';
import { LayoutChildrenType } from './layout-children-type';

interface BoxProps {
  style?: StyleProp<ViewStyle>,
  background?: string,
  space?: SpaceType,
  children: LayoutChildrenType
}

export const Box: React.FC<BoxProps>;