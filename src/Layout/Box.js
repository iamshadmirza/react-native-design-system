import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getChildrenStyle = ({ theme, space }) => {
  const childStyle = [{
    margin: theme.space[space],
  }];
  return childStyle;
};

const Box = (props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, props.style])}>
      {React.Children.toArray(props.children).map((item, index) => (
        <View style={getChildrenStyle(props)} key={index}>
          {item}
        </View>
      ))}
    </View>
  );
};

Box.propTypes = {
  style: PropTypes.object,
  space: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

Box.defaultProps = {
  space: 'small',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});

export default withTheme(Box);
