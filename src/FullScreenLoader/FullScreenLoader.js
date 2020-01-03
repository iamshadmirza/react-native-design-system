import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const FullScreenLoader = (props) => {
  const theme = useThemeContext();
  const background = { backgroundColor: theme.brandColor[props.background] };
  if (props.loading) {
    return (
      <View style={StyleSheet.flatten([styles.container, background, props.style])}>
        <ActivityIndicator style={styles.indicator} color={props.indicatorColor} size={props.size} />
        {props.children}
      </View>
    );
  } else {
    return null;
  }
};

FullScreenLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  style: PropTypes.object,
  children: PropTypes.element,
  indicatorColor: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

FullScreenLoader.defaultProps = {
  size: 'large',
  background: 'semitransparent',
  indicatorColor: '#1e88e5',
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
  indicator: {
    padding: 10,
  },
});

export default FullScreenLoader;
