import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getChildrenStyle = (
  {theme, space, verticalSpace, cropEndSpace, data},
  index,
) => {
  const childStyle = [
    {
      marginRight: theme.layoutSpace[space],
    },
  ];
  if (index === 0) {
    childStyle.push({
      marginLeft: theme.layoutSpace[space],
    });
  }
  if (verticalSpace) {
    childStyle.push({
      marginVertical: theme.layoutSpace[verticalSpace],
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
        {backgroundColor: theme.colors.brandColor.background},
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
  space: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  verticalSpace: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  cropEndSpace: PropTypes.bool,
  ...FlatList.propTypes,
};

InlineList.defaultProps = {
  space: 'medium',
  verticalSpace: 'none',
  cropEndSpace: true,
};

export default InlineList;
