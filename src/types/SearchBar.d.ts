import React from 'react';
import { IconNode } from './icon-type';

interface SearchBarProps {
  indicatorColor?: string,
  loading?: boolean,
  iconColor?: string,
  onCancel?: () => void,
  rightIcon?: IconNode,
}

export const SearchBar: React.FC<SearchBarProps>;
