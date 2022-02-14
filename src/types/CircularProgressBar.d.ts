import React from 'react';
import {AccessibilityProps} from 'react-native';

interface CircularProgressBarProps extends AccessibilityProps {
  activeColor: string;
  passiveColor: string;
  baseColor: string;
  width: number;
  radius: number;
  percent: number;
  duration: number;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps>;
