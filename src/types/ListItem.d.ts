import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';
import { WidthType } from './width-type';
import { LengthType } from './length-type';
import { IconNode } from './icon-type';
import { TextAlignType } from './text-align-type';
import { ListSpaceType } from './space-type';

interface ListItemProps {
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  subtitleStyle?: StyleProp<TextStyle>,
  iconStyle?: StyleProp<ViewStyle>,
  textAlign?: TextAlignType,
  children: string,
  subtitle?: string,
  background?: string,
  textColor?: string,
  subtitleColor?: string,
  chevronColor?: string,
  size?: SizeType,
  space?: ListSpaceType,
  onPress?: () => void,
  avatarSource?: object,
  leftIcon?: IconNode,
  rightIcon?: IconNode,
  chevron?: boolean,
  disabled?: boolean,
  activeOpacity?: number,
}

export const ListItem: React.FC<ListItemProps>;