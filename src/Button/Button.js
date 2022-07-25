import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {
  fontBases,
  fontVariants,
  radii,
  shadows,
  sizes,
} from '../util/prop-types';
import Text from '../Text/Text';

const getTextStyle = ({
  outline,
  transparent,
  loading,
  disabled,
  theme,
  color,
}) => {
  const textStyle = [];
  if (outline || transparent) {
    textStyle.push({
      color: theme.colors[color],
    });
  }
  if (loading && outline) {
    textStyle.push({
      color: theme.colors[color] + '50',
    });
  }
  if (disabled) {
    textStyle.push({
      color: theme.colors.disabledText,
    });
  }
  return textStyle;
};

const getContainerStyle = props => {
  const {
    outline,
    round,
    transparent,
    disabled,
    loading,
    size,
    theme,
    color,
    tint,
    borderColor,
    radius,
    shadow,
  } = props;
  const buttonStyles = [styles.container];
  buttonStyles.push({
    backgroundColor: theme.colors[color],
    borderWidth: 1,
    borderColor: theme.colors[color],
    borderRadius: theme.radius[radius],
    paddingVertical: theme.buttonSize[size],
    paddingHorizontal: theme.buttonSize[size] * 2,
    ...theme.shadow[shadow],
  });
  if (borderColor) {
    buttonStyles.push({
      borderColor: theme.colors[borderColor],
    });
  }
  if (round) {
    buttonStyles.push({
      borderRadius: theme.buttonSize.full,
    });
  }
  if (outline) {
    buttonStyles.push({
      backgroundColor: theme.colors[color] + (tint ? '10' : '00'),
    });
  }
  if (loading) {
    buttonStyles.push({
      borderWidth: 0,
      backgroundColor: theme.colors[color] + '50',
    });
  }
  if (transparent) {
    buttonStyles.push({
      borderWidth: 0,
      backgroundColor: 'transparent',
    });
  }
  if (loading && outline) {
    buttonStyles.push({
      backgroundColor: theme.colors[color] + '20',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors[borderColor || color] + '30',
    });
  }
  if (disabled) {
    buttonStyles.push({
      backgroundColor: theme.colors.disabled,
      borderColor: theme.colors.disabled,
    });
  }
  return buttonStyles;
};

const renderChildren = props => {
  const {
    loading,
    disabled,
    iconStyle,
    theme,
    color,
    indicatorColor,
    leftIcon,
    rightIcon,
    fontBase,
    fontVariant,
    textStyle,
    children,
    size,
    textColor,
    leftIconStyle,
    icon,
    rightIconStyle,
  } = props;
  return (
    <>
      {loading && !disabled && (
        <ActivityIndicator
          style={[styles.iconStyle, iconStyle]}
          color={indicatorColor || theme.colors[color]}
        />
      )}
      {leftIcon ||
        (icon && (
          <View style={[styles.iconStyle, iconStyle, leftIconStyle]}>
            {leftIcon || icon}
          </View>
        ))}
      <Text
        size={size}
        color={textColor}
        fontBase={fontBase}
        fontVariant={fontVariant}
        style={StyleSheet.flatten([getTextStyle(props), textStyle])}>
        {children}
      </Text>
      {rightIcon && (
        <View style={[styles.iconStyle, iconStyle, rightIconStyle]}>
          {rightIcon}
        </View>
      )}
    </>
  );
};

const Button = ({style, ...props}) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      onPress={props.onPress}
      disabled={props.disabled || props.loading}>
      <View
        style={StyleSheet.flatten([
          getContainerStyle({...props, theme}),
          style,
        ])}>
        {renderChildren({...props, theme})}
      </View>
    </TouchableElement>
  );
};

Button.propTypes = {
  /**  To override default style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**  To override default text style */
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**  To override default icon style */
  iconStyle: PropTypes.object,
  /**  To override default left icon style */
  leftIconStyle: PropTypes.object,
  /**  To override default right icon style */
  rightIconStyle: PropTypes.object,
  /**  Pass button text as children as children */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**  Change indicator color */
  indicatorColor: PropTypes.string,
  /**  To change button size */
  size: sizes,
  /**  To change button width */
  width: sizes,
  /**  callback function to be called when pressed */
  onPress: PropTypes.func.isRequired,
  /**  Pass the brand color */
  color: PropTypes.string,
  /**  Pass the text color */
  textColor: PropTypes.string,
  /**  Pass the brand color */
  borderColor: PropTypes.string,
  /**  Boolean value for round button */
  round: PropTypes.bool,
  /**  Boolean value for outline button */
  outline: PropTypes.bool,
  /**  Boolean value for disabled button */
  transparent: PropTypes.bool,
  /**  Boolean value for transparent button */
  disabled: PropTypes.bool,
  /**  Boolean value for loading button */
  loading: PropTypes.bool,
  /**  To pass custom icon (default and same as leftIcon) */
  icon: PropTypes.element,
  /**  To pass custom icon on left */
  leftIcon: PropTypes.element,
  /**  To pass custom icon on right */
  rightIcon: PropTypes.element,
  /**  To make button short or long */
  length: PropTypes.oneOf(['long', 'short']),
  /**  To enable outline button tint */
  tint: PropTypes.bool,
  /**  Customize Radius */
  radius: radii,
  /**  Customize Shadow */
  shadow: shadows,
  /**  Customize button font */
  fontBase: fontBases,
  fontVariant: fontVariants,
};

Button.defaultProps = {
  children: 'Submit',
  size: 'md',
  length: 'long',
  width: 'md',
  color: 'primary',
  textColor: 'white',
  tint: false,
  radius: 'sm',
  shadow: 'none',
  fontBase: 'body',
  fontVariant: 'semibold',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    paddingHorizontal: 10,
  },
});

export default Button;
