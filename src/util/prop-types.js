import PropTypes from 'prop-types';

export const sizeArray = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
];

export const fontSizeArray = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];

export const spaceArray = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];

export const radius = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'full',
];

export const fontBaseArray = ['heading', 'body'];
export const fontVariantArray = [
  'light',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'italic',
  'bolditalic',
];

export const shadowArray = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];

export const sizes = PropTypes.oneOf(sizeArray);
export const fontSizes = PropTypes.oneOf(fontSizes);

export const spaces = PropTypes.oneOf(spaceArray);
export const shadows = PropTypes.oneOf(shadowArray);
export const radii = PropTypes.oneOf(radius);
export const fontBases = PropTypes.oneOf(fontBaseArray);
export const fontVariants = PropTypes.oneOf(fontVariantArray);
