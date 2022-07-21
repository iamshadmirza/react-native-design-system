import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {spaces} from '../util/prop-types';

const getChildrenStyle = (
  {theme, space, verticalSpace, cropEndSpace, data},
  index,
) => {
  const childStyle = [
    {
      marginRight: theme.space[space],
    },
  ];
  if (index === 0) {
    childStyle.push({
      marginLeft: theme.space[space],
    });
  }
  if (verticalSpace) {
    childStyle.push({
      marginVertical: theme.space[verticalSpace],
    });
  }
  if (cropEndSpace) {
    if (index === 0) {
      childStyle.push({
        marginLeft: 0,
      });
    }
    if (index === data.length - 1) {
      childStyle.push({
        marginRight: 0,
      });
    }
  }
  return childStyle;
};

const InlineList = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  return (
    <FlatList
      ref={ref}
      horizontal
      {...props}
      style={StyleSheet.flatten([
        {backgroundColor: theme.colors.background},
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

InlineList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: spaces,
  verticalSpace: spaces,
  cropEndSpace: PropTypes.bool,
  ...FlatList.propTypes,
};

InlineList.defaultProps = {
  space: 'md',
  verticalSpace: 'none',
  cropEndSpace: true,
};

export default InlineList;
