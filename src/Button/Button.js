import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getTextStyle = ({ size, outline, disabled, theme }) => {
  const textStyle = [{
    fontWeight: Platform.OS === 'android' ? '500' : '400',
    fontSize: theme.fontSize[size],
    color: theme.textColor.white,
  }];
  if (outline) {
    textStyle.push({
      color: theme.brandColor.primary,
    });
  }
  if (disabled) {
    textStyle.push({
      color: theme.textColor.disabled,
    });
  }
  return textStyle;
};

const getContainerStyle = ({ outline, width, round, disabled, loading, size, type, theme }) => {
  const buttonStyles = [styles.container];
  buttonStyles.push({
    backgroundColor: theme.brandColor.primary,
    padding: theme.size[size],
  });
  if (type === 'short') {
    buttonStyles.push({
      width: width,
    });
  }
  if (round) {
    buttonStyles.push({
      borderRadius: theme.size[size] * 2,
    });
  }
  if (outline) {
    buttonStyles.push({
      borderWidth: 1,
      backgroundColor: theme.brandColor.white,
      borderColor: theme.brandColor.primary,
    });
  }
  if (loading) {
    buttonStyles.push({
      backgroundColor: theme.brandColor.secondary,
      elevation: 0,
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
          color={props.indicatorColor || props.theme.brandColor.white} />}
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
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  round: PropTypes.bool,
  outline: PropTypes.bool,
  icon: PropTypes.element,
  type: PropTypes.oneOf(['long', 'short']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Button.defaultProps = {
  children: 'Submit',
  size: 'medium',
  type: 'long',
  width: 160,
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    minWidth: 150,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  iconStyle: {
    paddingRight: 10,
  },
});

export default withTheme(Button);
