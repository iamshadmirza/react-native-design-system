import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { DirectionType } from './direction-type';

interface DeckProps {
    style?: StyleProp<ViewStyle>,
    direction?: DirectionType,
    data: Array,
    renderItem: () => void,
    keyExtractor: () => void,
    loadMoreCards?: () => void,
    onNegativeSwipe?: () => void,
    onPositiveSwipe?: () => void,
    fade?: boolean,
    loop?: boolean,
    loadInitialData?: boolean,
    loadingScreen: React.ReactElement,
}

export const Deck: React.FC<DeckProps>;