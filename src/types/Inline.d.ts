import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { SpaceType, VerticalSpaceType } from './space-type';
import { IconNode } from './icon-type';
import { LayoutChildrenType } from './layout-children-type';

interface InlineProps {
  style?: StyleProp<ViewStyle>,
  space?: SpaceType,
  children: LayoutChildrenType,
  verticalSpace?: VerticalSpaceType,
  cropEndSpace?: boolean,
}

export const Inline: React.FC<InlineProps>;