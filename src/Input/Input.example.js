import React, {useState} from 'react';
import Input from './Input';
import {select, boolean, text} from '@storybook/addon-knobs';
import {sizeArray} from '../util/prop-types';

export default function ExampleInput() {
  const [textValue, setTextValue] = useState('');
  return (
    <Input
      size={select('size', sizeArray, 'md')}
      outline={boolean('outline', true)}
      round={boolean('round', false)}
      label={text('label', 'Username')}
      labelColor={select('labelColor', ['heading', 'para', 'subtle'], 'para')}
      textColor={select('textColor', ['heading', 'para', 'subtle'], 'para')}
      placeholder={text('placeholder', 'Enter Username')}
      error={boolean('error', false)}
      floatingLabel={boolean('floatingLabel', false)}
      errorCaption={text('errorCaption', 'Please enter the correct username')}
      value={textValue}
      onChangeText={setTextValue}
    />
  );
}
