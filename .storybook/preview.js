import React from 'react';
import {ThemeProvider, theme} from '../src';
import {withKnobs} from '@storybook/addon-knobs';

export const decorators = [
  withKnobs,
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
