import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const FullScreenLoader = (props) => {
  const background = { backgroundColor: props.theme.brandColor[props.background] };
  if (props.loading) {
    return (
      <View style={StyleSheet.flatten([styles.container, background, props.style])}>
        <ActivityIndicator color={props.theme.brandColor[props.indicatorColor]} size={props.size} />
      </View>
    );
  } else {
    return null;
  }
};

FullScreenLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  style: PropTypes.object,
  indicatorColor: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

FullScreenLoader.defaultProps = {
  size: 'large',
  background: 'semitransparent',
  indicatorColor: 'primary',
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 3,
    zIndex: 1000,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(FullScreenLoader);
