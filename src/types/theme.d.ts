import {colorTypes} from './colors-type';
import {FontSizeType, RadiusType, ShadowType, SizeType} from './size-type';
import {SpaceType} from './space-type';
import {FontThemeType} from './typography-type';

type knownScale<T> = {[k in T]: number};

type unknownScale = {
  [size: string]: number;
};

type unknownColors = {
  [color: string]: string;
};

type possibleSizes = knownScale<SizeType> & unknownScale;
type possibleFontSizes = knownScale<FontSizeType> & unknownScale;
type possibleSpaces = knownScale<SpaceType> & unknownScale;
type possibleColors = colorTypes & unknownColors;

type ShadowObject = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export interface themeType {
  fontSize: possibleFontSizes;
  lineHeight: possibleFontSizes;
  size: possibleSizes;
  actionButtonSize: possibleSizes;
  buttonSize: possibleSizes;
  iconSize: possibleSizes;
  avatarSize: possibleSizes;
  badgeSize: possibleSizes;
  miniBadgeSize: possibleSizes;
  space: possibleSpaces;
  indicatorSize: possibleSizes;
  colors: possibleColors;
  shadow: {[S in ShadowType]: ShadowObject};
  radius?: RadiusType;
  font: FontThemeType;
}
