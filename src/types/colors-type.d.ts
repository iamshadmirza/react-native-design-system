type colors =
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
  | 'orange'
  | 'amber'
  | 'deeporange'
  | 'brown'
  | 'grey'
  | 'bluegrey'
  | 'black';
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
  | '900'
  | 'A100'
  | 'A200'
  | 'A300'
  | 'A400'
  | 'A700';

type themes = 'light' | 'dark';
type brandColors =
  | 'primary'
  | 'seconday'
  | 'success'
  | 'error'
  | 'warning'
  | 'disabled'
  | 'disabledText'
  | 'backgroundDark'
  | 'backgroundLight'
  | 'foreground'
  | 'heading'
  | 'para'
  | 'subtle'
  | 'transparent'
  | 'semitransparent'
  | 'white';

type genericColorsType = {[K in colors]: {[K in shades]: string}};

type themeColorsType = {[K in themes]: {[K in brandColors]: string}};

type colorTypes = genericColorsType | themeColorsType;
