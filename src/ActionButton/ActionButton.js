import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, size, color }) => {
  return {
    ...styles.container,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.brandColor[color],
    width: theme.actionButtonSize[size],
    height: theme.actionButtonSize[size],
    borderRadius: theme.actionButtonSize[size] / 2,
  };
};

const ActionButton = ({ style, ...props }) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      onPress={props.onPress}
    >
      <View
        style={StyleSheet.flatten([getContainerStyle({ ...props, theme }), style])}>
        {props.icon ||
          <Feather
            name="plus"
            size={theme.iconSize[props.size]}
            color={props.iconColor || theme.brandColor.white} />
        }
      </View>
    </TouchableElement>
  );
};

ActionButton.propTypes = {
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  onPress: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  size: 'medium',
  color: 'primary',
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        elevation: 3,
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

export default ActionButton;
