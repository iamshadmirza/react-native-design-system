import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, size, mini, color, square }) => {
  const badgeStyle = [styles.container];
  if (color) {
    badgeStyle.push({
      backgroundColor: theme.brandColor[color],
    });
  }
  if (square) {
    badgeStyle.push({
      borderRadius: 3,
    });
  }
  if (mini) {
    badgeStyle.push({
      width: theme.miniBadgeSize[size],
      height: theme.miniBadgeSize[size],
    });
  }
  return badgeStyle;
};

const getTextStyle = ({ theme, size }) => {
  return {
    color: '#fff',
    fontSize: theme.badgeSize[size],
    marginVertical: 5,
    marginHorizontal: 10,
  };
};

const Badge = ({ children, onPress, style, textStyle, ...props }) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={StyleSheet.flatten(StyleSheet.flatten([getContainerStyle({ ...props, theme }), style]))}>
        {props.mini ? null :
          <Text style={StyleSheet.flatten([getTextStyle({ ...props, theme }), textStyle])}>
            {children}
          </Text>}
      </View>
    </TouchableElement>
  );
};

Badge.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  mini: PropTypes.bool,
  onPress: PropTypes.func,
  square: PropTypes.bool,
};

Badge.defaultProps = {
  children: 0,
  color: 'primary',
  size: 'small',
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
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

export default Badge;
