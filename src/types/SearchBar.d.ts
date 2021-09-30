import React from 'react';
import { TextInputProps } from 'react-native';
import { IconNode } from './icon-type';
import { SizeType } from './size-type';
interface SearchBarProps extends TextInputProps {
  indicatorColor?: string;
  loading?: boolean;
  iconColor?: string;
  onCancel?: () => void;
  rightIcon?: IconNode;
  outline: boolean;
  size: SizeType;
}

export const SearchBar: React.FC<SearchBarProps>;
