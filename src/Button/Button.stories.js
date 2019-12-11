import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './index';

storiesOf('Button', module)
  .addParameters({
    info: {
      source: true,
    },
  })
  .add('default', () => (
    <Button onPress={action('pressed')}>
      Press Me
    </Button>
  ))
  .add('round', () => (
    <Button round onPress={action('pressed')}>
      Press Me
    </Button>
  ))
  .add('outline', () => (
    <Button outline onPress={action('pressed')}>
      Press Me
    </Button>
  ))
  .add('loading', () => (
    <Button loading onPress={action('pressed')}>
      Press Me
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled onPress={action('pressed')}>
      Press Me
    </Button>
  ))
  .add('short', () => (
    <Button type="short" onPress={action('pressed')}>
      Press Me
    </Button>
  ));
