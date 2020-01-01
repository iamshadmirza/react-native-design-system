import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ row, horizontal, align, vertical, theme, space }) => {
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
  if (align === 'center') {
    cardStyle.push({
      alignSelf: 'center',
    });
  }
  if (align === 'left') {
    cardStyle.push({
      alignSelf: 'flex-start',
    });
  }
  if (align === 'right') {
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
  const theme = useThemeContext();
  return (
    <View style={StyleSheet.flatten([getContainerStyle({ ...props, theme }), props.style])}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  row: PropTypes.bool,
  style: PropTypes.object,
  space: PropTypes.oneOf(['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
};

Card.defaultProps = {
  space: 'medium',
};

export default Card;
