import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const RightAlign = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

RightAlign.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignSelf: 'flex-end',
  },
});

export default RightAlign;
