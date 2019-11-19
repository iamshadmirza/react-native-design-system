import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getContainerStyle = ({ row, horizontal, center, left, right, vertical, theme, space }) => {
  const cardStyle = [{
    elevation: 1,
    padding: theme.space[space],
    alignItems: 'stretch',
    justifyContent: 'center',
  }];
  if (row) {
    cardStyle.push({
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
    });
  }
  if (center) {
    cardStyle.push({
      alignSelf: 'center',
    });
  }
  if (left) {
    cardStyle.push({
      alignSelf: 'flex-start',
    });
  }
  if (right) {
    cardStyle.push({
      alignSelf: 'flex-end',
    });
  }
  if (horizontal) {
    cardStyle.push({
      paddingVertical: 0,
    });
  }
  if (vertical) {
    cardStyle.push({
      paddingHorizontal: 0,
    });
  }
  return cardStyle;
};

const Card = (props) => {
  return (
    <View style={StyleSheet.flatten([getContainerStyle(props), props.style])}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  row: PropTypes.bool,
  style: PropTypes.object,
  space: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  center: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Card.defaultProps = {
  space: 'medium',
};

export default withTheme(Card);
