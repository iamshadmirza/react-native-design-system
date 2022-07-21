import React from 'react';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {spaces} from '../util/prop-types';

const getChildrenStyle = (
  {theme, space, horizontalSpace, cropEndSpace, data},
  index,
) => {
  const childStyle = [
    {
      marginLeft: theme.space[space],
      marginTop: theme.space[space],
    },
  ];
  // if (index === 0) {
  //   childStyle.push({
  //     marginTop: theme.space[space],
  //   });
  // }
  // if (horizontalSpace) {
  //   childStyle.push({
  //     marginHorizontal: theme.space[horizontalSpace],

  //   });
  // }
  // if (cropEndSpace) {
  //   if (index === 0) {
  //     childStyle.push({
  //       marginTop: 0,
  //     });
  //   }
  //   if (index === data.length - 1) {
  //     childStyle.push({
  //       marginBottom: 0,
  //     });
  //   }
  // }
  return childStyle;
};

const TileList = props => {
  const theme = useThemeContext();
  return (
    <FlatList
      {...props}
      // style={{ flexDirection: 'row' }}
      numColumns={3}
      renderItem={child => (
        <View style={getChildrenStyle({...props, theme}, child.index)}>
          {props.renderItem(child)}
        </View>
      )}
    />
  );
};

TileList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: spaces,
  horizontalSpace: spaces,
  cropEndSpace: PropTypes.bool,
  ...FlatList.propTypes,
};

TileList.defaultProps = {
  space: 'md',
  horizontalSpace: 'none',
  cropEndSpace: false,
};

export default TileList;
