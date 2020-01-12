import React from 'react';
import { configure, addParameters, addDecorator } from "@storybook/react";
import storyTheme from './theme';
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider, theme } from '../src';

addParameters({
  options: {
    theme: storyTheme,
  },
});

function loadStories() {
  const guides = require.context("../guides/", true, /\.stories\.(js|mdx)$/);
  const req = require.context("../src/", true, /\.stories\.(js|mdx)$/);
  const stories = [];
  stories.push(guides("./GetStarted.stories.mdx"));
  stories.push(guides("./DesignRules.stories.mdx"));
  stories.push(guides("./Theme.stories.mdx"));
  stories.push(guides("./Colors.stories.mdx"));
  req.keys().forEach(story => stories.push(req(story)));
  return stories;
}

addDecorator(withKnobs)

addDecorator((Story) => {
  return (
    <ThemeProvider value={theme}>
      <Story />
    </ThemeProvider>
  );
});

configure(loadStories, module);
