import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {fontBases, fontSizes, fontVariants} from '../util/prop-types';

const getTextStyle = ({
  theme,
  color,
  size,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  fontBase,
  fontVariant,
}) => {
  const style = [
    {
      color: theme.colors[color],
      fontSize: theme.fontSize[size],
      lineHeight: theme.lineHeight[lineHeight || size],
      textAlignVertical: 'center',
      fontWeight,
      textAlign,
    },
  ];
  if (fontFamily) {
    style.push({fontFamily: theme.font[fontFamily]});
  }
  if (letterSpacing) {
    style.push({letterSpacing: theme.letterSpacing[letterSpacing]});
  }
  if (fontBase && fontVariant) {
    style.push({
      fontFamily: theme.font[fontBase][fontVariant],
    });
  }
  return style;
};

const TextElement = React.forwardRef(({style, ...props}, ref) => {
  const theme = useThemeContext();
  return (
    <Text
      {...props}
      ref={ref}
      includeFontPadding={false}
      style={StyleSheet.flatten([getTextStyle({...props, theme}), style])}>
      {props.children}
    </Text>
  );
});

TextElement.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  size: fontSizes,
  lineHeight: fontSizes,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: fontSizes,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  fontBase: fontBases,
  fontVariant: fontVariants,
};

TextElement.defaultProps = {
  color: 'para',
  size: 'md',
  fontWeight: '500',
  textAlign: 'left',
  fontBases: 'body',
  fontVariant: 'medium',
};

export default TextElement;
