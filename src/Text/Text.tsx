import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
import {resizeFont} from '../util/resizeFont';
import {themeType} from 'src/types/theme';
const getTextStyle = ({
  theme,
  color,
  size,
  scale,
  fontWeight,
}: TextElementProps & {theme: themeType}) => {
  return {
    color: theme.textColor[color!],
    fontSize: scale ? theme.fontSize[size!] : resizeFont(theme.fontSize[size!]),
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontWeight: fontWeight,
  };
};
type TextElementProps = {
  style?: StyleProp<TextStyle>;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  color?: string;
  scale?: boolean;
  fontWeight?: string;
};
const TextElement: React.SFC<TextElementProps> = ({style, ...props}) => {
  const theme = useThemeContext();
  return (
    <Text
      {...props}
      style={StyleSheet.flatten([getTextStyle({...props, theme}), style])}>
      {props.children}
    </Text>
  );
};

TextElement.defaultProps = {
  color: 'default',
  size: 'medium',
  scale: true,
  fontWeight: '500',
};
export default TextElement;
