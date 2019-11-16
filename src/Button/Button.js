import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getTextStyle = ({ size, outline, disabled, theme }) => {
  return {
    fontWeight: 'bold',
    fontSize: theme.fontSize[size],
    color: disabled ? theme.textColor.disabled :
      outline ? theme.brandColor.primary : theme.textColor.white,
  };
};

const getContainerStyle = ({ outline, round, disabled, loading, size, theme }) => {
  return {
    ...styles.container,
    backgroundColor: disabled ? theme.brandColor.disabled :
      loading ? theme.brandColor.secondary :
        outline ? theme.brandColor.white : theme.brandColor.primary,
    padding: theme.size[size],
    borderRadius: round ? theme.size[size] * 2 : 2,
    borderWidth: disabled ? StyleSheet.hairlineWidth :
      outline ? 1 : 0,
    borderColor: disabled ? theme.textColor.disabled : theme.textColor.primary,
  };
};


const renderChildren = (props) => {
  if (props.loading) {
    return <ActivityIndicator color={props.indicatorColor || props.theme.brandColor.white} />;
  } else {
    return (
      <>
        {props.icon &&
          <View style={styles.iconStyle}>
            {props.icon}
          </View>}
        <Text style={StyleSheet.flatten([getTextStyle(props), props.textStyle])}>
          {props.children}
        </Text>
      </>
    );
  }
};

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled || props.loading}
      style={StyleSheet.flatten([getContainerStyle(props), props.style])}
      activeOpacity={0.8}>
      {renderChildren(props)}
    </TouchableOpacity>
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
};

Button.defaultProps = {
  children: 'Submit',
  size: 'medium',
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    paddingRight: 10,
  },
});

export default withTheme(Button);
