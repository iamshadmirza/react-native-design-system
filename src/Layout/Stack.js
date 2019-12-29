import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getChildrenStyle = ({ theme, space, horizontalSpace }, index) => {
  const childStyle = [{
    marginBottom: theme.space[space],
  }];
  if (index === 0) {
    childStyle.push({
      marginTop: theme.space[space],
    });
  }
  if (horizontalSpace) {
    childStyle.push({
      marginHorizontal: theme.space[horizontalSpace],

    });
  }
  return childStyle;
};

const Stack = (props) => {
  return (
    <View style={props.style}>
      {React.Children.toArray(props.children).map((item, index) => (
        <View style={getChildrenStyle(props, index)} key={index}>
          {item}
        </View>
      ))}
    </View>
  );
};

Stack.propTypes = {
  style: PropTypes.object,
  space: PropTypes.oneOf(['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  horizontalSpace: PropTypes.oneOf(['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

Stack.defaultProps = {
  space: 'medium',
  horizontalSpace: 'none',
};

export default withTheme(Stack);
