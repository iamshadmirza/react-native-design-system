import React, {ReactElement} from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';

interface DismissKeyboardProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactElement | ReactElement[];
}

export const DismissKeyboard: React.FC<DismissKeyboardProps>;
