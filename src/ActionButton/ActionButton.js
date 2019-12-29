import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, size, color }) => {
  return {
    ...styles.container,
    backgroundColor: theme.brandColor[color],
    width: theme.actionButtonSize[size],
    height: theme.actionButtonSize[size],
    borderRadius: theme.actionButtonSize[size] / 2,
  };
};

const ActionButton = (props) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      style={StyleSheet.flatten([getContainerStyle({ ...props, theme }), props.style])}
      onPress={props.onPress}
    >
      <View style={styles.centerView}>
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
    position: 'absolute',
    elevation: 3,
    aspectRatio: 1,
    bottom: 25,
    right: 25,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActionButton;
