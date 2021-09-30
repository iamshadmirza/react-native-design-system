import React from 'react';
import { ViewStyle, StyleProp, FlatListProps } from 'react-native';

import { SpaceType, HorizontalSpaceType, VerticalSpaceType } from './space-type';
import { LayoutChildrenType } from './layout-children-type';
import { DirectionType } from './direction-type';

interface StackListProps extends FlatListProps<any> {
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  horizontalSpace?: HorizontalSpaceType;
  verticalSpace?: VerticalSpaceType;
  direction?: DirectionType;
  cropEndSpace?: boolean;
}

export const StackList: React.FC<StackListProps>;