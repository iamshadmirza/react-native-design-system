import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import {LayoutChildrenType} from './layout-children-type';
import {SpaceType, VerticalSpaceType} from './space-type';

interface InlineProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  children: LayoutChildrenType;
  verticalSpace?: VerticalSpaceType;
  cropEndSpace?: boolean;
}

export const Inline: React.FC<InlineProps>;
