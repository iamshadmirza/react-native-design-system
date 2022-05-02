import React from 'react';
import {InputProps} from './Input';
interface SearchBarProps extends InputProps {
  indicatorColor?: string;
  loading?: boolean;
  onCancel?: () => void;
}

export const SearchBar: React.FC<SearchBarProps>;
