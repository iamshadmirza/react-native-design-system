import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CenterAlign = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

CenterAlign.propTypes = {
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
    alignSelf: 'center',
  },
});

export default CenterAlign;
