import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {spaces} from '../util/prop-types';

const getChildrenStyle = (
  {theme, space, horizontalSpace, cropEndSpace, data},
  index,
) => {
  const childStyle = [
    {
      marginBottom: theme.space[space],
    },
  ];
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
  if (cropEndSpace) {
    if (index === 0) {
      childStyle.push({
        marginTop: 0,
      });
    }
    if (index === data.length - 1) {
      childStyle.push({
        marginBottom: 0,
      });
    }
  }
  return childStyle;
};

const StackList = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  return (
    <FlatList
      ref={ref}
      {...props}
      style={StyleSheet.flatten([
        {backgroundColor: theme.colors[props.background]},
        props.style,
      ])}
      renderItem={child => (
        <View style={getChildrenStyle({...props, theme}, child.index)}>
          {props.renderItem(child)}
        </View>
      )}
    />
  );
});

StackList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: spaces,
  horizontalSpace: spaces,
  background: PropTypes.string,
  cropEndSpace: PropTypes.bool,
  ...FlatList.propTypes,
};

StackList.defaultProps = {
  space: 'md',
  horizontalSpace: 'none',
  cropEndSpace: true,
  background: 'bg-300',
};

export default StackList;
