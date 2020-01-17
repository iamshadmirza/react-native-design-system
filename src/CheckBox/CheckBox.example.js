import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { CheckBox } from './index';

export default function ExampleRadioButton() {
  const [value, setCheckBoxValue] = useState(false);
  return (
    <CheckBox
      size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')}
      checked={value}
      iconRight={boolean('iconRight', false)}
      color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')}
      textColor={select('textColor', ['heading', 'default', 'subtle', 'grey'], 'default')}
      onPress={() => setCheckBoxValue(!value)}>
      Hello CheckBox
  </CheckBox >
  );
}
