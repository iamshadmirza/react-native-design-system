import React, {useState} from 'react';
import {select, boolean} from '@storybook/addon-knobs';
import {CheckBox} from './index';

export default function ExampleRadioButton() {
  const [value, setCheckBoxValue] = useState(false);
  return (
    <CheckBox
      size={select('size', sizeArray, 'md')}
      checked={value}
      iconRight={boolean('iconRight', false)}
      color={select('color', ['primary', 'secondary'], 'primary')}
      textColor={select('textColor', ['heading', 'body', 'subtle'], 'heading')}
      onPress={() => setCheckBoxValue(!value)}>
      Hello CheckBox
    </CheckBox>
  );
}
