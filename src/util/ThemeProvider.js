import React from 'react';
export const Context = React.createContext();

const ThemeProvider = (props) => {
  if (props.value === undefined) {
    throw new Error('theme value must be provided within a ThemeProvider');
  }
  return (
    <Context.Provider value={props.value}>
      {props.children}
    </Context.Provider>
  );
};

export default ThemeProvider;
