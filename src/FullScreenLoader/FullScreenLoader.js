import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const FullScreenLoader = (props) => {
  if (props.loading) {
    return (
      <View style={[styles.container, props.style]}>
        <ActivityIndicator color={props.color} size={props.size} />
      </View>
    );
  } else {
    return null;
  }
};

FullScreenLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

FullScreenLoader.defaultProps = {
  size: 'large',
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 1,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenLoader;
