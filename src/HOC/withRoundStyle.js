import React from 'react';
import { StyleSheet } from 'react-native';

const withRoundStyle = Component => (props) => {
  return (
    <Component {...props} style={[styles.roundStyle, props.style]}>
      {props.children}
    </Component>
  );
};

const styles = StyleSheet.create({
  roundStyle: {
    borderRadius: 75,
  },
});

export default withRoundStyle;
