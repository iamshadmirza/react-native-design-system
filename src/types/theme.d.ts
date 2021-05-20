
type sizes = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
type textColors = 'default' | 'heading' | 'subtle' | 'grey' | 'disabled' | 'white';
type brandColors = 'primary' | 'secondary' | 'tertiary' | 'background' | 'disabled' | 'white' | 'semitransparent' | 'grey' | 'clearWhite' | 'outline';

type knownScale = {
  [k in sizes]: number
}

type unknownScale = {
  [size: string]: number
}

type knownBrandColors = {
  [k in brandColors]: number
}

type knownTextColors = {
  [k in textColors]: number
}

type unknownColors = {
  [color: string]: string
}

type possibleSizes = knownScale & unknownScale;
type possibleSpaces = knownScale & { none: number } & unknownScale;
type possibleTextColors = knownTextColors & unknownColors;
type possibleBrandColors = knownBrandColors & unknownColors;

export interface themeType {
  fontSize: possibleSizes;
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
  fontFamily: {
    heading: string;
    text: string;
  };
  textColor: possibleTextColors;
  brandColor: possibleBrandColors;
}
