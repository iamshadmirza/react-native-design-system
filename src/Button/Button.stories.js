import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './index';

export default {
  title: 'Stories|Button',
};

export const Default = () => (
  <Button onPress={action('pressed')}>
    Press Me
  </Button>
);

export const Round = () => (
  <Button round onPress={action('pressed')}>
    Press Me
  </Button>
);

export const Outline = () => (
  <Button outline onPress={action('pressed')}>
    Press Me
  </Button>
);

export const Loading = () => (
  <Button loading onPress={action('pressed')}>
    Press Me
  </Button>
);

export const Disabled = () => (
  <Button disabled onPress={action('pressed')}>
    Press Me
  </Button>
);

export const Short = () => (
  <Button type="short" onPress={action('pressed')}>
    Press Me
  </Button>
);