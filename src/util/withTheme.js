import React from 'react';
import { Context } from './ThemeProvider';

const withTheme = Component => props => {
  return (
    <Context.Consumer>
      {value => (
        <Component {...props} theme={value}>
          {props.children}
        </Component>
      )}
    </Context.Consumer>
  );
};

export default withTheme;
