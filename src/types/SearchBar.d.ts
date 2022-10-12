import React, {Ref} from 'react';
import {TextInput} from 'react-native';
import {InputProps} from './Input';
interface SearchBarProps extends InputProps {
  indicatorColor?: string;
  loading?: boolean;
  onCancel?: () => void;
  ref?: Ref<TextInput>;
}

export const SearchBar: React.FC<SearchBarProps>;
