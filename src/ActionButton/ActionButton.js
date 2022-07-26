import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import {useThemeContext} from '../util/ThemeProvider';
import {shadows, sizes} from '../util/prop-types';

const getContainerStyle = ({theme, size, color, shadow}) => {
  return {
    ...theme.shadow[shadow],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors[color],
    width: theme.actionButtonSize[size],
    height: theme.actionButtonSize[size],
    borderRadius: theme.actionButtonSize[size] / 2,
  };
};

const ActionButton = React.forwardRef(({style, ...props}, ref) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement {...props} onPress={props.onPress} ref={ref}>
      <View
        style={StyleSheet.flatten([
          getContainerStyle({...props, theme}),
          style,
        ])}>
        {props.icon || (
          <Feather
            name="plus"
            size={theme.size[props.size]}
            color={theme.colors[props.iconColor]}
          />
        )}
      </View>
    </TouchableElement>
  );
});

ActionButton.propTypes = {
  size: sizes,
  onPress: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  shadow: shadows,
};

ActionButton.defaultProps = {
  size: 'md',
  color: 'primary',
  shadow: 'md',
  iconColor: 'white',
};

export default ActionButton;
