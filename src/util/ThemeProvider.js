import React from 'react';
export const ThemeContext = React.createContext();
export const ColorSchemeContext = React.createContext();

const COLOR_SCHEME_KEY = 'RNDS_COLOR_SCHEME';

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

const ThemeProvider = ({theme, colorMode, storage, children}) => {
  if (theme === undefined) {
    throw new Error('theme value must be provided within a ThemeProvider');
  }

  const [isDarkMode, setIsDarkMode] = React.useState(colorMode !== 'light');

  const toggleDarkMode = () => {
    setIsDarkMode(prevValue => {
      if (storage) {
        const AsyncStorage = storage;
        AsyncStorage.setItem(COLOR_SCHEME_KEY, isDarkMode);
      }
      return !prevValue;
    });
  };

  const currentTheme = React.useMemo(() => {
    let _theme = {...theme};
    if (isDarkMode) {
      _theme = {...theme, colors: {...theme.colors, ...theme.colors.dark}};
    }
    return _theme;
  }, [isDarkMode, theme]);

  React.useEffect(() => {
    async function getThemeFromStorage() {
      if (storage) {
        const AsyncStorage = storage;
        const isDark = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
        setIsDarkMode(isDark);
      }
    }
    getThemeFromStorage();
  }, [storage]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <ColorSchemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
      </ColorSchemeContext.Provider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  colorMode: 'light',
};

export default ThemeProvider;
