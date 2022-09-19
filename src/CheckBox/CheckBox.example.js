import React, {useState} from 'react';
import {select, boolean} from '@storybook/addon-knobs';
import {CheckBox} from './index';
import {sizeArray} from '../util/prop-types';

export default function ExampleRadioButton() {
  const [value, setCheckBoxValue] = useState(false);
  return (
    <CheckBox
      size={select('size', sizeArray, 'md')}
      checked={value}
      iconRight={boolean('iconRight', false)}
      color={select('color', ['primary', 'secondary'], 'primary')}
      textColor={select('textColor', ['heading', 'para', 'subtle'], 'heading')}
      onPress={() => setCheckBoxValue(!value)}>
      Hello CheckBox
    </CheckBox>
  );
}
