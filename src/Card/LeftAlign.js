import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LeftAlign = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

LeftAlign.propTypes = {
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
    alignSelf: 'flex-start',
  },
});

export default LeftAlign;
