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
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];

export const sizes = PropTypes.oneOf(sizeArray);

export const spaces = PropTypes.oneOf(['none', ...sizeArray]);
