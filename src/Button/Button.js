import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getTextStyle = ({ size, outline, loading, disabled, theme, color }) => {
  const textStyle = [{
    fontWeight: Platform.OS === 'android' ? 'bold' : '400',
    fontSize: theme.fontSize[size],
    margin: theme.buttonSize[size],
    color: theme.textColor.white,
  }];
  if (outline) {
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

const getContainerStyle = (props) => {
  const { outline, width, round, disabled, loading, size, length, theme, color } = props;
  const buttonStyles = [styles.container];
  buttonStyles.push({
    backgroundColor: theme.brandColor[color],
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
      borderWidth: 1,
      backgroundColor: theme.brandColor[color] + '20',
      borderColor: theme.brandColor[color],
    });
  }
  if (loading) {
    buttonStyles.push({
      borderWidth: 0,
      backgroundColor: theme.brandColor[color] + '50',
      elevation: 0,
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


const renderChildren = (props) => {
  return (
    <>
      {props.loading &&
        <ActivityIndicator
          style={styles.iconStyle}
          color={props.indicatorColor || props.theme.brandColor[props.color]} />}
      {props.icon &&
        <View style={styles.iconStyle}>
          {props.icon}
        </View>}
      <Text style={StyleSheet.flatten([getTextStyle(props), props.textStyle])}>
        {props.children}
      </Text>
    </>
  );
};

const Button = (props) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      onPress={props.onPress}
      disabled={props.disabled || props.loading}
    >
      <View style={StyleSheet.flatten([getContainerStyle({ ...props, theme }), props.style])}>
        {renderChildren({ ...props, theme })}
      </View>
    </TouchableElement>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.string,
  indicatorColor: PropTypes.string,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  width: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  round: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.element,
  length: PropTypes.oneOf(['long', 'short']),
};

Button.defaultProps = {
  children: 'Submit',
  size: 'medium',
  length: 'long',
  width: 'medium',
  color: 'primary',
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  iconStyle: {
    paddingRight: 5,
  },
});

export default Button;
