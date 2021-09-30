import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { SpaceType, HorizontalSpaceType, VerticalSpaceType } from './space-type';
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