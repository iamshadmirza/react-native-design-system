import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getContainerStyle = (props) => {
  return {
    flexDirection: props.row ? 'row' : 'column',
    justifyContent: props.row ? 'flex-start' : 'center',
    alignItems: props.row ? 'center' : 'stretch',
    flexWrap: props.row ? 'wrap' : null,
    padding: props.theme.space[props.space],
    paddingVertical: props.horizontal ? 0 : null,
    paddingHorizontal: props.vertical ? 0 : null,
  };
};

const Card = (props) => {
  return (
    <View style={StyleSheet.flatten([getContainerStyle(props), props.style])}>
      <>
        {props.children}
      </>
    </View>
  );
};

Card.propTypes = {
  row: PropTypes.bool,
  style: PropTypes.object,
  space: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.element.isRequired,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

Card.defaultProps = {
  space: 'medium',
};

export default withTheme(Card);
