import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { RadioButton, RadioItem } from './index';

export default function ExampleRadioButton() {
  const [activeId, setActiveId] = useState('a');
  return (
    <RadioButton
      size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')}
      activeId={activeId}
      iconRight={boolean('iconRight', false)}
      color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')}
      textColor={select('textColor', ['heading', 'default', 'subtle', 'grey'], 'default')}
      selectItem={id => setActiveId(id)}
    >
      <RadioItem id="a">
        Option A
      </RadioItem>
      <RadioItem id="b">
        Option B
      </RadioItem>
      <RadioItem id="c">
        Option C
      </RadioItem>
    </RadioButton>
  );
}
