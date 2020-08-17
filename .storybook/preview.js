import React from 'react';
import { ThemeProvider, theme } from '../src';

export const decorators = [
    (Story) => (
        <ThemeProvider value={theme}>
            <Story />
        </ThemeProvider>
    ),
];