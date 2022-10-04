import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {removeAccessibilityPropsFromProps} from '../util/accessibility';
import {spaces} from '../util/prop-types';

const getChildrenStyle = (
  {
    direction,
    theme,
    space,
    verticalSpace,
    horizontalSpace,
    cropEndSpace,
    children,
  },
  index,
) => {
  if (direction === 'vertical') {
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
      if (index === React.Children.count(children) - 1) {
        childStyle.push({
          marginBottom: 0,
        });
      }
    }
    return childStyle;
  } else {
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
      if (index === React.Children.count(children) - 1) {
        childStyle.push({
          marginRight: 0,
        });
      }
    }
    return childStyle;
  }
};

const Stack = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  const Container = props.scrollable ? ScrollView : View;
  const {direction, style, children, ...otherProps} = props;
  return (
    <Container
      ref={ref}
      {...otherProps}
      style={[
        {backgroundColor: theme.colors[props.background]},
        props.direction === 'horizontal' ? styles.container : {},
        props.style,
      ]}>
      {React.Children.toArray(children).map((item, index) => (
        <View
          style={getChildrenStyle(
            {
              ...removeAccessibilityPropsFromProps(otherProps),
              direction,
              children,
              theme,
            },
            index,
          )}
          key={index}>
          {item}
        </View>
      ))}
    </Container>
  );
});

Stack.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: spaces,
  horizontalSpace: spaces,
  verticalSpace: spaces,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  cropEndSpace: PropTypes.bool,
  background: PropTypes.string,
  scrollable: PropTypes.bool,
};

Stack.defaultProps = {
  space: 'md',
  horizontalSpace: 'none',
  verticalSpace: 'none',
  cropEndSpace: false,
  direction: 'vertical',
  scrollable: false,
  background: 'transparent',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});

export default Stack;
