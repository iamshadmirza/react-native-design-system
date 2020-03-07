import React from "react";
import { Text, StyleSheet } from "react-native";
import { useThemeContext } from "../util/ThemeProvider";
import { resizeFont } from "../util/resizeFont";
const getTextStyle = ({ theme, color, size, scale, fontWeight }) => {
  return {
    color: theme.textColor[color],
    fontSize: scale ? theme.fontSize[size] : resizeFont(theme.fontSize[size]),
    includeFontPadding: false,
    textAlignVertical: "center",
    fontWeight: fontWeight
  };
};
type TextElementProps = {
  style?: object,
  size?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge",
  color?: string,
  scale?: boolean,
  fontWeight?: string
};
const TextElement: React.SFC<TextElementProps> = ({ style, ...props }) => {
  const theme = useThemeContext();
  return (
    <Text
      {...props}
      style={StyleSheet.flatten([getTextStyle({ ...props, theme }), style])}
    >
      {props.children}
    </Text>
  );
};
TextElement.defaultProps = {
  color: "default",
  size: "medium",
  scale: true,
  fontWeight: "500"
};
export default TextElement;
