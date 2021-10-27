
type sizes = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

type knownScale = {
  [k in sizes]: number
}

type unknownScale = {
  [size: string]: number
}

type unknownColors = {
  [color: string]: string
}

type possibleSizes = knownScale & unknownScale;
type possibleSpaces = knownScale & { none: number } & unknownScale;
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
  listItemSpace: possibleSizes;
  space: possibleSpaces;
  layoutSpace: possibleSpaces;
  indicatorSize: possibleSizes;
  colors: possibleColors;
}
