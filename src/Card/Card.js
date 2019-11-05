import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Card = (props) => {
  const rowStyle = props.row ? styles.alignRow : {};
  return (
    <View style={[styles.container, rowStyle, props.style]}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  row: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Card;
