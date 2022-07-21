import React, {useState} from 'react';
import MenuAddButton from './MenuAddButton';
import {select, boolean, color} from '@storybook/addon-knobs';
import {sizeArray} from '../util/prop-types';

export default function ExampleMenuButton() {
  const [count, setCount] = useState(0);
  return (
    <MenuAddButton
      size={select('size', sizeArray, 'md')}
      disabled={boolean('disabled', false)}
      onIncrement={() => setCount(count + 1)}
      onDecrement={() => setCount(count - 1)}
      iconColor={color('iconColor', '#333')}
      count={count}
    />
  );
}
