import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getTextStyle = ({ size, outline, loading, disabled, secondaryColor, theme, color }) => {
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
      color: theme.brandColor[secondaryColor],
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
  const { outline, width, round, disabled, loading, size, type, theme, color, secondaryColor } = props;
  const buttonStyles = [styles.container];
  buttonStyles.push({
    backgroundColor: theme.brandColor[color],
  });
  if (type === 'short') {
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
      backgroundColor: theme.brandColor.white,
      borderColor: theme.brandColor[color],
    });
  }
  if (loading) {
    buttonStyles.push({
      borderWidth: 0,
      backgroundColor: theme.brandColor[secondaryColor],
      elevation: 0,
    });
  }
  if (loading && outline) {
    buttonStyles.push({
      backgroundColor: theme.brandColor.white,
      borderWidth: StyleSheet.hairlineWidth,
    });
  }
  if (disabled) {
    buttonStyles.push({
      backgroundColor: theme.brandColor.disabled,
      borderWidth: StyleSheet.hairlineWidth,
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
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      onPress={props.onPress}
      disabled={props.disabled || props.loading}
    >
      <View style={StyleSheet.flatten([getContainerStyle(props), props.style])}>
        {renderChildren(props)}
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
  secondaryColor: PropTypes.string,
  round: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.element,
  type: PropTypes.oneOf(['long', 'short']),
};

Button.defaultProps = {
  children: 'Submit',
  size: 'medium',
  type: 'long',
  width: 'medium',
  color: 'primary',
  secondaryColor: 'secondary',
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

export default withTheme(Button);
