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
  | 'para'
  | 'subtle'
  | 'transparent'
  | 'semitransparent'
  | 'outline'
  | 'white'
  | 'black'

type backgroundColors = {
  100: string;
  200: string;
  300: string;
}

type colorShades = `${colors}-${shades}`

type genericColorsType = { [K in colorShades]: string };

type lightBrandColorsType =  { [K in brandColors]: string };
type unknownLightBrandColors = {
  brandColor: {
    [color: string]: string;
  };
};

type darkBrandColorsType = {dark: {[K in brandColors]: string}};
type unknownDarkBrandColors = {
  dark: {
    [color: string]: string;
  };
};

export type colorTypes = genericColorsType &
  lightBrandColorsType &
  unknownLightBrandColors &
  darkBrandColorsType &
  unknownDarkBrandColors &
  backgroundColors

