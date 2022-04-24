import React from 'react';

import {StyleProp, ViewStyle} from 'react-native';
import {AlignType} from './align-type';
import {LayoutChildrenType} from './layout-children-type';
import {SpaceType} from './space-type';
import { colorTypes } from './colors-type';

interface CardProps extends ViewStyle {
  row?: boolean;
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  children: LayoutChildrenType;
  horizontal?: boolean;
  vertical?: boolean;
  align?: AlignType;
  shadow?: boolean;
  background?: keyof colorTypes | string
}

export const Card: React.FC<CardProps>;
