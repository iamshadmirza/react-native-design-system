import React, {ReactNode} from 'react';
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
  children: ReactNode;
  subtitle?: ReactNode;
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
  fontBase?: fontBaseType;
  fontVariant?: fontVariantType;
  subtitleFontBase?: fontBaseType;
  subtitleFontVariant?: fontVariantType;
  subtitleSize?: SizeType;
}

export const ListItem: React.FC<ListItemProps>;
