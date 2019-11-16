import React from 'react';
import theme from './theme';
export const Context = React.createContext();

const ThemeProvider = (props) => {
  return (
    <Context.Provider value={props.value || theme}>
      {props.children}
    </Context.Provider>
  );
};

export default ThemeProvider;
