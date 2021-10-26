import React from 'react';
import {useColorScheme} from 'react-native';
export const ThemeContext = React.createContext();
export const ColorSchemeContext = React.createContext();

const COLOR_SCHEME_KEY = 'RNDS_COLOR_SCHEME';

export const useThemeContext = () => {
  const theme = React.useContext(ThemeContext);
  console.log(`theme`, theme); // TODO: remove this
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

  const colorScheme = colorMode || useColorScheme();

  const [isDarkMode, setIsDarkMode] = React.useState(colorScheme !== 'light');

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
    const _theme = theme;
    const baseColors = isDarkMode ? theme.colors.dark : theme.colors.light;
    _theme.colors = {...theme.colors, ...baseColors};
    return _theme;
  }, [isDarkMode]);

  React.useEffect(() => {
    async function getThemeFromStorage() {
      if (storage) {
        const AsyncStorage = storage;
        const isDark = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
        setIsDarkMode(isDark);
      }
    }
    getThemeFromStorage();
  }, []);

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
