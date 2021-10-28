import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { SpaceType, HorizontalSpaceType, VerticalSpaceType } from './space-type';
import { LayoutChildrenType } from './layout-children-type';
import { DirectionType } from './direction-type';
import { colorTypes } from './colors-type';

interface StackProps {
  style?: StyleProp<ViewStyle>,
  space?: SpaceType,
  horizontalSpace?: HorizontalSpaceType,
  verticalSpace?: VerticalSpaceType,
  direction?: DirectionType,
  children: LayoutChildrenType,
  cropEndSpace?: boolean,
  scrollable?: boolean,
  background?: keyof colorTypes | string
}

export const Stack: React.FC<StackProps>;
