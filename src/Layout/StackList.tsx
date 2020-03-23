import React from 'react';
import {View, FlatList} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
const getChildrenStyle = (
  {theme, space, horizontalSpace, cropEndSpace, data},
  index,
) => {
  console.log({index, data});
  const childStyle = [
    {
      marginBottom: theme.layoutSpace[space],
    },
  ];
  if (index === 0) {
    childStyle.push({
      marginTop: theme.layoutSpace[space],
    });
  }
  if (horizontalSpace) {
    childStyle.push({
      marginHorizontal: theme.layoutSpace[horizontalSpace],
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
type StackListProps = {
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
const StackList: React.SFC<StackListProps> = props => {
  const theme = useThemeContext();
  return (
    <FlatList
      {...props}
      renderItem={child => (
        <View style={getChildrenStyle({...props, theme}, child.index)}>
          {props.renderItem(child)}
        </View>
      )}
    />
  );
};
StackList.defaultProps = {
  space: 'medium',
  horizontalSpace: 'none',
  cropEndSpace: true,
};
export default StackList;
