import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes, {number} from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getContainerStyle = ({
  theme,
  space,
  background,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  alignContent,
  alignSelf,
}) => {
  const styles = {
    flex: flex,
    flexDirection,
    alignItems,
    justifyContent,
    padding: theme.layoutSpace[space],
    background: theme.brandColor[background],
  };
  if (flexWrap) {
    styles.flexWrap = flexWrap;
  }
  if (alignContent) {
    styles.alignContent = alignContent;
  }
  if (alignSelf) {
    styles.alignSelf = alignSelf;
  }
  return styles;
};

const Flex = props => {
  const theme = useThemeContext();
  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        getContainerStyle({...props, theme}),
        props.style,
      ])}>
      {props.children}
    </View>
  );
};

Flex.propTypes = {
  style: PropTypes.object,
  background: PropTypes.string,
  space: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  alignSelf: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  flex: number,
  flexWrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

Flex.defaultProps = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  space: 'medium',
  background: 'clearWhite',
};

export default Flex;
