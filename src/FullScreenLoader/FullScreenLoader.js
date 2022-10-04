import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {extractAccessibilityPropsFromProps} from '../util/accessibility';

const FullScreenLoader = props => {
  const theme = useThemeContext();
  const backgroundStyles = {
    backgroundColor: theme.colors[props.background],
  };
  if (props.loading) {
    return (
      <View
        {...extractAccessibilityPropsFromProps(props)}
        style={StyleSheet.flatten([
          styles.container,
          backgroundStyles,
          props.style,
        ])}>
        <ActivityIndicator
          style={styles.indicator}
          color={props.indicatorColor}
          size={props.size}
        />
        {props.children}
      </View>
    );
  } else {
    return null;
  }
};

FullScreenLoader.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.element,
  indicatorColor: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

FullScreenLoader.defaultProps = {
  size: 'large',
  background: 'bg300',
  indicatorColor: '#1e88e5',
  loading: true,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
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
