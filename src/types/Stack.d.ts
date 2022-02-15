import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import {DirectionType} from './direction-type';
import {LayoutChildrenType} from './layout-children-type';
import {HorizontalSpaceType, SpaceType, VerticalSpaceType} from './space-type';

interface StackProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  horizontalSpace?: HorizontalSpaceType;
  verticalSpace?: VerticalSpaceType;
  direction?: DirectionType;
  children: LayoutChildrenType;
  cropEndSpace?: boolean;
}

export const Stack: React.FC<StackProps>;
