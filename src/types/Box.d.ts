import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import {LayoutChildrenType} from './layout-children-type';
import {SpaceType} from './space-type';

import { colorTypes } from './colors-type';
interface BoxProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  ackground?: keyof colorTypes | string,
  space?: SpaceType;
  children: LayoutChildrenType;
}

export const Box: React.FC<BoxProps>;
