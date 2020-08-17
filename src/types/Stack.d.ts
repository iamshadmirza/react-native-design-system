import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { SpaceType, HorizontalSpaceType, VerticalSpaceType } from './space-type';
import { IconNode } from './icon-type';
import { LayoutChildrenType } from './layout-children-type';
import { DirectionType } from './direction-type';

interface StackProps {
  style?: StyleProp<ViewStyle>,
  space?: SpaceType,
  horizontalSpace?: HorizontalSpaceType,
  verticalSpace?: VerticalSpaceType,
  direction?: DirectionType,
  children: LayoutChildrenType,
  cropEndSpace?: boolean,
}

export const Stack: React.FC<StackProps>;