import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useThemeContext } from '../util/ThemeProvider';
const getTextStyle = ({
  size,
  outline,
  transparent,
  loading,
  disabled,
  theme,
  color,
}) => {
  const textStyle = [
    {
      fontWeight: Platform.OS === 'android' ? 'bold' : '400',
      fontSize: theme.fontSize[size],
      margin: theme.buttonSize[size],
      color: theme.textColor.white,
    },
  ];
  if (outline || transparent) {
    textStyle.push({
      color: theme.brandColor[color],
    });
  }
  if (loading && outline) {
    textStyle.push({
      color: theme.brandColor[color] + '50',
    });
  }
  if (disabled) {
    textStyle.push({
      color: theme.textColor.disabled,
    });
  }
  return textStyle;
};
const getContainerStyle = props => {
  const {
    outline,
    width,
    round,
    transparent,
    disabled,
    loading,
    size,
    length,
    theme,
    color,
    tint,
  } = props;
  const buttonStyles = [styles.container];
  buttonStyles.push({
    backgroundColor: theme.brandColor[color],
    borderWidth: 1,
    borderColor: theme.brandColor[color],
  });
  if (length === 'short') {
    buttonStyles.push({
      width: theme.buttonWidth[width],
    });
  }
  if (round) {
    buttonStyles.push({
      borderRadius: theme.buttonSize[size] * 2,
    });
  }
  if (outline) {
    buttonStyles.push({
      backgroundColor: theme.brandColor[color] + (tint ? '10' : '00'),
    });
  }
  if (loading) {
    buttonStyles.push({
      borderWidth: 0,
      backgroundColor: theme.brandColor[color] + '50',
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
      backgroundColor: theme.brandColor[color] + '20',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.brandColor[color] + '30',
    });
  }
  if (disabled) {
    buttonStyles.push({
      backgroundColor: theme.brandColor.disabled,
      borderColor: theme.textColor.disabled,
    });
  }
  return buttonStyles;
};
const renderChildren = props => {
  return (
    <>
      {props.loading && !props.disabled && (
        <ActivityIndicator
          style={styles.iconStyle}
          color={props.indicatorColor || props.theme.brandColor[props.color]}
        />
      )}
      {props.icon && <View style={styles.iconStyle}>{props.icon}</View>}
      <Text style={StyleSheet.flatten([getTextStyle(props), props.textStyle])}>
        {props.children}
      </Text>
    </>
  );
};
type ButtonProps = {
  style?: object,
  textStyle?: object,
  indicatorColor?: string,
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  width?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  onPress: (...args: any[]) => any,
  color?: string,
  round?: boolean,
  outline?: boolean,
  transparent?: boolean,
  disabled?: boolean,
  loading?: boolean,
  icon?: JSX.Element,
  length?: 'long' | 'short',
  tint?: boolean
};
const Button: React.SFC<ButtonProps> = props => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      onPress={props.onPress}
      disabled={props.disabled || props.loading}
    >
      <View
        style={StyleSheet.flatten([
          getContainerStyle({ ...props, theme }),
          props.style,
        ])}
      >
        {renderChildren({ ...props, theme })}
      </View>
    </TouchableElement>
  );
};
Button.defaultProps = {
  children: 'Submit',
  size: 'medium',
  length: 'long',
  width: 'medium',
  color: 'primary',
  tint: true,
};
const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    paddingRight: 5,
  },
});
export default Button;
