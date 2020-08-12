import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
const getContainerStyle = ({
  row,
  horizontal,
  align,
  vertical,
  theme,
  space,
  shadow,
  outline,
}) => {
  const cardStyle = [
    styles.container,
    {
      padding: theme.layoutSpace[space],
    },
  ];
  if (shadow) {
    cardStyle.push(styles.shadow);
  }
  if (row) {
    cardStyle.push({
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
    });
  }
  if (outline) {
    cardStyle.push({
      elevation: 0,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#333',
    });
  }
  if (align === 'center') {
    cardStyle.push({
      alignItems: 'center',
    });
  }
  if (align === 'left') {
    cardStyle.push({
      alignItems: 'flex-start',
    });
  }
  if (align === 'right') {
    cardStyle.push({
      alignItems: 'flex-end',
    });
  }
  if (horizontal) {
    cardStyle.push({
      paddingVertical: 0,
    });
  }
  if (vertical) {
    cardStyle.push({
      paddingHorizontal: 0,
    });
  }
  return cardStyle;
};
type CardProps = {
  row?: boolean;
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
  horizontal?: boolean;
  vertical?: boolean;
  align?: 'center' | 'left' | 'right';
  shadow?: boolean;
  outline?: boolean;
};
const Card: React.SFC<CardProps> = props => {
  const theme = useThemeContext();
  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        getContainerStyle({...props, theme}),
        props.style,
      ])}>
      {props.children}
    </View>
  );
};
Card.defaultProps = {
  space: 'medium',
  shadow: true,
  outline: false,
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 3,
  },
  shadow: {
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      web: {
        // boxShadow: `${offsetWidth}px ${offsetHeight}px ${radius}px ${rgba}`
        boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
      },
    }),
  },
});
export default Card;
