import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes, {number} from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {spaces} from '../util/prop-types';

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
    padding: theme.space[space],
    background: theme.colors[background],
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  background: PropTypes.string,
  space: spaces,
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
  space: 'md',
  background: 'transparent',
};

export default Flex;
