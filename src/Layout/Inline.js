import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getChildrenStyle = ({ theme, space }, index) => {
  const childStyle = [{
    marginRight: theme.space[space],
  }];
  if (index === 0) {
    childStyle.push({
      marginLeft: theme.space[space],
    });
  }
  return childStyle;
};

const Inline = (props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, props.style])}>
      {React.Children.toArray(props.children).map((item, index) => (
        <View style={getChildrenStyle(props, index)} key={index}>
          {item}
        </View>
      ))}
    </View>
  );
};

Inline.propTypes = {
  style: PropTypes.object,
  space: PropTypes.oneOf(['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

Inline.defaultProps = {
  space: 'medium',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});

export default withTheme(Inline);
