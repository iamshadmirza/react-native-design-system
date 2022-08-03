import React, {ReactElement} from 'react';
import {
  AccessibilityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconNode} from './icon-type';
import {RadiusType, ShadowType, SizeType} from './size-type';
import {ListSpaceType} from './space-type';
import {TextAlignType} from './text-align-type';
import {colorTypes} from './colors-type';
import {fontBaseType, fontVariantType} from './typography-type';

interface ListItemProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  textAlign?: TextAlignType;
  children: string | ReactElement | ReactElement[];
  subtitle?: string | ReactElement | ReactElement[];
  background?: keyof colorTypes | string;
  textColor?: keyof colorTypes | string;
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
  shadow?: ShadowType;
  radius?: RadiusType;
  fontbase?: fontBaseType;
  fontVariant?: fontVariantType;
  subtitleFontbase?: fontBaseType;
  subtitleFontVariant?: fontVariantType;
}

export const ListItem: React.FC<ListItemProps>;
