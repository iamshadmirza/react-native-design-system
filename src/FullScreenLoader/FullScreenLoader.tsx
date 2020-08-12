import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useThemeContext } from '../util/ThemeProvider';
type FullScreenLoaderProps = {
  loading: boolean,
  style?: object,
  indicatorColor?: string,
  background?: string,
  size?: 'small' | 'large'
};
const FullScreenLoader: React.SFC<FullScreenLoaderProps> = props => {
  const theme = useThemeContext();
  const background = { backgroundColor: theme.brandColor[props.background!] };
  if (props.loading) {
    return (
      <View
        style={StyleSheet.flatten([styles.container, background, props.style])}
      >
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
FullScreenLoader.defaultProps = {
  size: 'large',
  background: 'semitransparent',
  indicatorColor: '#1e88e5',
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
