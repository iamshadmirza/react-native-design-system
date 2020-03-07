import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeContext } from '../util/ThemeProvider';
const getContainerStyle = ({ theme, space, background }) => {
  return {
    padding: theme.layoutSpace[space],
    background: theme.brandColor[background],
    alignItems: 'center',
    justifyContent: 'center',
  };
};
type BoxProps = {
  style?: object,
  background?: string,
  space?:
    | 'none'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
};
const Box: React.SFC<BoxProps> = props => {
  const theme = useThemeContext();
  return (
    <View
      style={StyleSheet.flatten([
        getContainerStyle({ ...props, theme }),
        props.style,
      ])}
    >
      {props.children}
    </View>
  );
};
Box.defaultProps = {
  space: 'medium',
  background: 'clearWhite',
};
export default Box;
