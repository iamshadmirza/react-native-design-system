import React from 'react';

import {StyleProp, ViewStyle} from 'react-native';
import {AlignType} from './align-type';
import {LayoutChildrenType} from './layout-children-type';
import {SpaceType} from './space-type';
import {colorTypes} from './colors-type';
import {RadiusType, ShadowType} from './size-type';

interface CardProps extends ViewStyle {
  row?: boolean;
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  children: LayoutChildrenType;
  horizontal?: boolean;
  vertical?: boolean;
  align?: AlignType;
  shadow?: ShadowType;
  background?: keyof colorTypes | string;
  radius?: RadiusType;
}

export const Card: React.FC<CardProps>;
