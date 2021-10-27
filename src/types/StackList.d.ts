import React from 'react';
import { ViewStyle, StyleProp, FlatListProps, ScrollViewComponent } from 'react-native';

import { SpaceType, HorizontalSpaceType, VerticalSpaceType } from './space-type';
import { DirectionType } from './direction-type';

interface StackListProps extends FlatListProps<any> {
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  horizontalSpace?: HorizontalSpaceType;
  verticalSpace?: VerticalSpaceType;
  direction?: DirectionType;
  cropEndSpace?: boolean;
  ref?: React.RefObject<ScrollViewComponent>;
}

export const StackList: React.FC<StackListProps>;
