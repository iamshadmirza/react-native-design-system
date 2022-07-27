type colors =
  | 'stone'
  | 'slate'
  | 'zinc'
  | 'red'
  | 'pink'
  | 'purple'
  | 'deeppurple'
  | 'indigo'
  | 'blue'
  | 'lightblue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lightgreen'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'deeporange'
  | 'brown'
  | 'green'
  | 'emerald'
  | 'sky'
  | 'voilet'
  | 'fuchsia'
  | 'rose'
  | 'gray'
  | 'neutral'
  | 'lightBlue'
  | 'warmGray'
  | 'coolGray'
  | 'blueGray';

type shades =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type brandColors =
  | 'primary'
  | 'seconday'
  | 'success'
  | 'error'
  | 'warning'
  | 'disabled'
  | 'disabledText'
  | 'heading'
  | 'body'
  | 'subtle'
  | 'transparent'
  | 'semitransparent'
  | 'outline'
  | 'white'
  | 'black'

type backgroundShade = '100' | '200' | '300';
type backgroundColors = `bg${backgroundShade}`

type colorShades = `${colors}${shades}`

type genericColorsType = { [K in colorShades]: string };

type lightBrandColorsType =  { [K in brandColors]: string };
type unknownLightBrandColors = {
  [color: string]: string;
};

type darkBrandColorsType = {dark: {[K in brandColors]: string}};

export type colorTypes = genericColorsType &
  lightBrandColorsType &
  unknownLightBrandColors &
  unknownDarkBrandColors &
  backgroundColors

