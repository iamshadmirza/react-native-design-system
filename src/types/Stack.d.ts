import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { SpaceType, HorizontalSpaceType } from './space-type';
import { IconNode } from './icon-type';
import { LayoutChildrenType } from './layout-children-type';

interface StackProps {
  style?: StyleProp<ViewStyle>,
  space?: SpaceType,
  horizontalSpace?: HorizontalSpaceType,
  children: LayoutChildrenType,
  cropEndSpace?: boolean,
}

export const Stack: React.FC<StackProps>;
