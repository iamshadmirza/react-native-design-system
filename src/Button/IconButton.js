import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';

import Text from '../Text/index';

const getContainerStyle = props => {
  const {
    outline,
    transparent,
    theme,
    borderColor,
    radius,
    shadow,
    rounded,
    background,
    size,
  } = props;
  const buttonStyles = [styles.root];
  buttonStyles.push({
    backgroundColor: theme.colors[background],
    borderRadius: theme.radius[radius],
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors[background],
    width: theme.size[size] * 2,
    height: theme.size[size] * 2,
    ...theme.shadow[shadow],
  });
  if (rounded) {
    buttonStyles.push({
      borderRadius: theme.buttonSize.xs,
    });
  }
  if (outline) {
    buttonStyles.push({
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors[borderColor],
    });
  }
  if (transparent) {
    buttonStyles.push({
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    });
  }
  return buttonStyles;
};

const IconButton = props => {
  const {
    text,
    onPress,
    style,
    iconStyle,
    icon,
    color,
    size,
    onLongPress,
    disabled,
    background,
    radius,
    shadow,
    ...rest
  } = props;
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableElement
      {...rest}
      disabled={!!disabled}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={[getContainerStyle({...props, theme}), style]}>
        {icon}
        {text ? (
          <Text size={size} style={styles.text}>
            {text}
          </Text>
        ) : null}
      </View>
    </TouchableElement>
  );
};

IconButton.defaultProps = {
  size: 'lg',
  background: 'bg100',
  radius: 'full',
  shadow: 'none',
  borderColor: 'primary',
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {marginLeft: 6},
});

export default IconButton;
