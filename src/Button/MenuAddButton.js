import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {useThemeContext, useThemeMode} from '../util/ThemeProvider';
import {radii, shadows, sizes} from '../util/prop-types';

const getContainerStyle = ({
  theme,
  size,
  count,
  disabled,
  shadow,
  radius,
  background,
}) => {
  const buttonStyle = [styles.container];
  buttonStyle.push({
    backgroundColor: theme.colors[background],
    paddingVertical: theme.buttonSize[size],
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: theme.radius[radius],
  });
  if (shadow) {
    buttonStyle.push(theme.shadow[shadow]);
  }
  if (count < 1) {
    buttonStyle.push({
      backgroundColor: theme.colors[background],
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  if (disabled) {
    buttonStyle.push({
      backgroundColor: theme.colors.disabled,
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  return buttonStyle;
};

const getTextStyle = ({theme, size, disabled}) => {
  const textStyle = [
    {
      fontSize: theme.fontSize[size],
      paddingHorizontal: 10,
      color: theme.colors.para,
    },
  ];
  if (disabled) {
    textStyle.push({
      color: theme.colors.disabledText,
    });
  }
  return textStyle;
};

const MenuAddButton = ({style, textStyle, ...props}) => {
  const theme = useThemeContext();
  const {isDarkMode} = useThemeMode();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  if (props.count < 1) {
    return (
      <TouchableElement
        {...props}
        disabled={props.disabled}
        onPress={props.onIncrement}>
        <View style={[getContainerStyle({...props, theme, isDarkMode}), style]}>
          <Text
            style={[getTextStyle({...props, theme, isDarkMode}), textStyle]}>
            ADD
          </Text>
        </View>
      </TouchableElement>
    );
  }
  return (
    <View style={[getContainerStyle({...props, theme}), style]}>
      <TouchableElement {...props} onPress={props.onDecrement}>
        <View style={styles.icon}>
          {props.minusIcon || (
            <MaterialIcons
              name="remove"
              color={props.iconColor || theme.colors.para}
              size={theme.fontSize[props.size]}
            />
          )}
        </View>
      </TouchableElement>
      <View style={[styles.countView]}>
        <Text style={[getTextStyle({...props, theme}), textStyle]}>
          {props.count}
        </Text>
      </View>
      <TouchableElement {...props} onPress={props.onIncrement}>
        <View style={styles.icon}>
          {props.plusIcon || (
            <MaterialIcons
              name="add"
              color={props.iconColor || theme.colors.para}
              size={theme.fontSize[props.size]}
            />
          )}
        </View>
      </TouchableElement>
    </View>
  );
};

MenuAddButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  plusIcon: PropTypes.element,
  minusIcon: PropTypes.element,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  size: sizes,
  shadow: shadows,
  radius: radii,
};

MenuAddButton.defaultProps = {
  count: 0,
  size: 'md',
  shadow: 'none',
  radius: 'sm',
  background: 'bg-200',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
  },
  icon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  countView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuAddButton;
