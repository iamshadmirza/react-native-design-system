import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {colorTypes} from './colors-type';
import {RadiusType, ShadowType} from './size-type';
import {SpaceType} from './space-type';

interface ImageProps extends ImageProps {
  style?: StyleProp<ViewStyle>;
  space?: SpaceType;
  shadow?: ShadowType;
  radius?: RadiusType;
  background?: colorTypes;
  borderColor?: colorTypes;
  borderWidth?: Number;
  width?: Number | String;
  height?: Number | String;
  aspectRatio?: Number;
  outline?: boolean;
  onPress: () => void;
}

export const Image: React.FC<ImageProps>;
