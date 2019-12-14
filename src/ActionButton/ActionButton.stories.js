import React from 'react';
import { action } from '@storybook/addon-actions';
import { ActionButton } from './index';

export default {
  title: 'Stories|ActionButton',
};

export const Xxsmall = () => (
  <ActionButton size="xxsmall" onPress={action('pressed')} />
);

export const Xsmall = () => (
  <ActionButton size="xsmall" onPress={action('pressed')} />
);

export const Small = () => (
  <ActionButton size="small" onPress={action('pressed')} />
);

export const Medium = () => (
  <ActionButton size="medium" onPress={action('pressed')} />
);

export const Large = () => (
  <ActionButton size="large" onPress={action('pressed')} />
);

export const Xlarge = () => (
  <ActionButton size="xlarge" onPress={action('pressed')} />
);

export const Xxlarge = () => (
  <ActionButton size="xxlarge" onPress={action('pressed')} />
);
