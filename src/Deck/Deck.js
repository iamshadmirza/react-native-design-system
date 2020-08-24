import React from 'react';
import DeckHorizontal from './DeckHorizontal';
import DeckVertical from './DeckVertical';
import DeckVerticalBasic from './DeckVerticalBasic';

export default function Deck({ direction, allowBackSwipe, ...props }) {
    return direction === 'horizontal'
        ? <DeckHorizontal {...props} />
        : allowBackSwipe
            ? <DeckVertical {...props} />
            : <DeckVerticalBasic {...props} />;
}
