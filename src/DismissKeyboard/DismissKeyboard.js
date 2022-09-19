import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {extractAccessibilityPropsFromProps} from '../util/accessibility';

const DismissKeyboard = ({children, style, ...rest}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={style}
      {...extractAccessibilityPropsFromProps(rest)}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
