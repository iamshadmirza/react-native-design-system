import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { SpaceType, VerticalSpaceType } from './space-type';
import { LayoutChildrenType } from './layout-children-type';

interface InlineProps {
  style?: StyleProp<ViewStyle>,
  space?: SpaceType,
  children: LayoutChildrenType,
  verticalSpace?: VerticalSpaceType,
  cropEndSpace?: boolean,
}

export const Inline: React.FC<InlineProps>;
