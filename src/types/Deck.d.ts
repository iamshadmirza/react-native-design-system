import React from 'react';
import {AccessibilityProps, StyleProp, ViewStyle} from 'react-native';
import {DirectionType} from './direction-type';

interface DeckProps extends AccessibilityProps {
  style?: StyleProp<ViewStyle>;
  direction?: DirectionType;
  data: Array;
  renderItem: () => void;
  keyExtractor: () => void;
  loadMoreCards?: () => void;
  onNegativeSwipe?: () => void;
  onPositiveSwipe?: () => void;
  fade?: boolean;
  loop?: boolean;
  loadInitialData?: boolean;
  loadingScreen: React.ReactNode;
}

export const Deck: React.FC<DeckProps>;
