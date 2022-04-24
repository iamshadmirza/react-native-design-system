import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { SpaceType } from './space-type';
import { LayoutChildrenType } from './layout-children-type';

interface FlexProp {
  style?: StyleProp<ViewStyle>,
  m?: SpaceType,
  mv?: SpaceType,
  mh?: SpaceType,
  mt?: SpaceType,
  mb?: SpaceType,
  ml?: SpaceType,
  mr?: SpaceType,
  p?: SpaceType,
  pv?: SpaceType,
  ph?: SpaceType,
  pt?: SpaceType,
  pb?: SpaceType,
  pl?: SpaceType,
  pr?: SpaceType,
  children: LayoutChildrenType,
}

export const Flex: React.FC<FlexProp>;
