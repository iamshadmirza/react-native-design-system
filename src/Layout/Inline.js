import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getChildrenStyle = ({ theme, space }, index) => {
  const childStyle = [{
    marginRight: theme.layoutSpace[space],
  }];
  if (index === 0) {
    childStyle.push({
      marginLeft: theme.layoutSpace[space],
    });
  }
  return childStyle;
};

const Inline = (props) => {
  const theme = useThemeContext();
  return (
    <View style={StyleSheet.flatten([styles.container, props.style])}>
      {React.Children.toArray(props.children).map((item, index) => (
        <View style={getChildrenStyle({ ...props, theme }, index)} key={index}>
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

export default Inline;
