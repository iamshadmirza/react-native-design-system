import React from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconNode} from './icon-type';
import {SizeType} from './size-type';
import {ListSpaceType} from './space-type';
import {TextAlignType} from './text-align-type';

interface ListItemProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  textAlign?: TextAlignType;
  children: string;
  subtitle?: string;
  background?: string;
  textColor?: string;
  subtitleColor?: string;
  chevronColor?: string;
  size?: SizeType;
  space?: ListSpaceType;
  onPress?: () => void;
  avatarSource?: object;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  chevron?: boolean;
  disabled?: boolean;
  activeOpacity?: number;
}

export const ListItem: React.FC<ListItemProps>;
