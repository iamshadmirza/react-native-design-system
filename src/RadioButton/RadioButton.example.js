import React, {useState} from 'react';
import {select, boolean} from '@storybook/addon-knobs';
import {RadioButton, RadioItem} from './index';
import {sizeArray} from '../util/prop-types';

export default function ExampleRadioButton() {
  const [activeId, setActiveId] = useState('a');
  return (
    <RadioButton
      size={select('size', sizeArray, 'md')}
      activeId={activeId}
      iconRight={boolean('iconRight', false)}
      color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')}
      textColor={select('textColor', ['heading', 'subtle', 'para'], 'default')}
      selectItem={id => setActiveId(id)}>
      <RadioItem id="a">Option A</RadioItem>
      <RadioItem id="b">Option B</RadioItem>
      <RadioItem id="c">Option C</RadioItem>
    </RadioButton>
  );
}
