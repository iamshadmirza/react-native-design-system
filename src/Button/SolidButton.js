import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../util/colors';

const renderIndicator = (props) => {
  if (props.loading) {
    return <ActivityIndicator color={props.indicatorColor || '#fff'} style={styles.indicator} />;
  }
};

const SolidButton = (props) => {
  const buttonColor = props.color ? { backgroundColor: props.color } : {};
  const disableStyle = props.disabled ? styles.disableStyle : {};
  const buttonSize = props.size ? { fontSize: props.size, marginHorizontal: props.size * 1.5, marginVertical: props.size / 4 } : {};
  const customWidth = props.width ? { width: props.width } : {};
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled === true || props.loading === true}
      style={StyleSheet.flatten([styles.container, buttonColor, customWidth, props.style, disableStyle])}
      activeOpacity={0.8}>
      {renderIndicator(props)}
      {props.icon &&
        <View style={styles.iconStyle}>{props.icon}</View>}
      <Text style={StyleSheet.flatten([styles.textStyle, props.textStyle, buttonSize])}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

SolidButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.string,
  color: PropTypes.string,
  indicatorColor: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
};

SolidButton.defaultProps = {
  children: 'Submit',
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    minWidth: 150,
    backgroundColor: '#333',
    borderRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    marginVertical: 16 / 4,
    fontWeight: '500',
    elevation: 3,
    paddingVertical: 10,
  },
  indicator: {
    paddingRight: 10,
  },
  disableStyle: {
    backgroundColor: colors.grey[400],
  },
  iconStyle: {
    paddingRight: 10,
  },
});

export default SolidButton;
