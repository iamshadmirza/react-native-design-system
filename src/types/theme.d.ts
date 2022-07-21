import {colorTypes} from './colors-type';

type sizes =
  | 'xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

type knownScale = {[k in sizes]: number};

type unknownScale = {
  [size: string]: number;
};

type unknownColors = {
  [color: string]: string;
};

type possibleSizes = knownScale & unknownScale;
type possibleSpaces = knownScale & {none: number} & unknownScale;
type possibleColors = colorTypes & unknownColors;

export interface themeType {
  fontSize: possibleSizes;
  lineHeight: possibleSizes;
  size: possibleSizes;
  actionButtonSize: possibleSizes;
  buttonSize: possibleSizes;
  buttonWidth: possibleSizes;
  iconSize: possibleSizes;
  avatarSize: possibleSizes;
  badgeSize: possibleSizes;
  miniBadgeSize: possibleSizes;
  space: 'none' | possibleSizes;
  indicatorSize: possibleSizes;
  colors: possibleColors;
}
