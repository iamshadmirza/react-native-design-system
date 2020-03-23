import React from 'react';
import {View, FlatList} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
const getChildrenStyle = ({theme, space}) => {
  const childStyle = [
    {
      marginLeft: theme.layoutSpace[space],
      marginTop: theme.layoutSpace[space],
    },
  ];
  // if (index === 0) {
  //   childStyle.push({
  //     marginTop: theme.layoutSpace[space],
  //   });
  // }
  // if (horizontalSpace) {
  //   childStyle.push({
  //     marginHorizontal: theme.layoutSpace[horizontalSpace],
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
type TileListProps = {
  style?: object;
  space?:
    | 'none'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  horizontalSpace?:
    | 'none'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  cropEndSpace?: boolean;
};
const TileList: React.SFC<TileListProps> = props => {
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
TileList.defaultProps = {
  space: 'medium',
  horizontalSpace: 'none',
  cropEndSpace: false,
};
export default TileList;
