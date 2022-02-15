import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import {LayoutChildrenType} from './layout-children-type';
import {SpaceType} from './space-type';

interface FlexProp extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  background?: string;
  space?: SpaceType;
  children: LayoutChildrenType;
  flex?: number;
  flexWrap?: 'no-wrap' | 'wrap' | 'wrap-reverse';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export const Flex: React.FC<FlexProp>;
