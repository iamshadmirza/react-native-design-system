import React from 'react';
import { ViewStyle, TextStyle, StyleProp, ViewProps } from 'react-native';

import { SizeType } from './size-type';

interface AvatarProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  source?: object;
  editable?: boolean;
  onPress?: () => void;
  size?: SizeType | string;
  square?: boolean;
  rounded?: boolean;
  editIconStyle?: StyleProp<ViewStyle>;
  editIconColor?: string;
}

export const Avatar: React.FC<AvatarProps>;