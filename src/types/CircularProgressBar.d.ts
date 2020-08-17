import React from 'react';

interface CircularProgressBarProps {
  activeColor: string,
  passiveColor: string,
  baseColor: string,
  width: number,
  radius: number,
  percent: number,
  duration: number,
}

export const CircularProgressBar: React.FC<CircularProgressBarProps>;