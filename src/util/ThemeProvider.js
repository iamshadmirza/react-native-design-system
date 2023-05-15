import React, {useEffect} from 'react';
export const ThemeContext = React.createContext();
export const ColorSchemeContext = React.createContext();
export const ComponentContext = React.createContext();

export const useThemeContext = () => {
  const theme = React.useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return theme;
};

export const useThemeMode = () => {
  const themeInfo = React.useContext(ColorSchemeContext);
  if (themeInfo === undefined) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return themeInfo;
};

export const useCustomComponent = () => {
  const components = React.useContext(ComponentContext);
  if (components === undefined) {
    throw new Error('useCustomComponent must be used within a ThemeProvider');
  }
  return components;
};

const ThemeProvider = ({theme, colorMode, children, components}) => {
  if (theme === undefined) {
    throw new Error('theme value must be provided within a ThemeProvider');
  }
  const [isDarkMode, setIsDarkMode] = React.useState(colorMode !== 'light');
  const toggleDarkMode = mode => {
    setIsDarkMode(prevValue => (mode ? mode === 'dark' : !prevValue));
  };

  useEffect(() => {
    setIsDarkMode(colorMode === 'dark');
  }, [colorMode]);

  const currentTheme = React.useMemo(() => {
    let _theme = {...theme};
    if (isDarkMode) {
      _theme = {...theme, colors: {...theme.colors, ...theme.colors.dark}};
    }
    return _theme;
  }, [isDarkMode, theme]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <ColorSchemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        <ComponentContext.Provider value={components || {}}>
          {children}
        </ComponentContext.Provider>
      </ColorSchemeContext.Provider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  colorMode: 'light',
};

export default ThemeProvider;
