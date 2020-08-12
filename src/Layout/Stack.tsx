import React from 'react';
import { View } from 'react-native';
import { useThemeContext } from '../util/ThemeProvider';
const getChildrenStyle = (
  { theme, space, horizontalSpace, cropEndSpace, children },
  index
) => {
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
    if (index === React.Children.count(children) - 1) {
      childStyle.push({
        marginBottom: 0,
      });
    }
  }
  return childStyle;
};
type StackProps = {
  style?: object,
  space?:
    | 'none'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  horizontalSpace?:
    | 'none'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  cropEndSpace?: boolean
};
const Stack: React.SFC<StackProps> = props => {
  const theme = useThemeContext();
  return (
    <View style={props.style}>
      {React.Children.toArray(props.children).map((item, index) => (
        <View style={getChildrenStyle({ ...props, theme }, index)} key={index}>
          {item}
        </View>
      ))}
    </View>
  );
};
Stack.defaultProps = {
  space: 'medium',
  horizontalSpace: 'none',
  cropEndSpace: true,
};
export default Stack;
