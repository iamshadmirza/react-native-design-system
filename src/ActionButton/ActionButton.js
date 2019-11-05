import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';

const ActionButton = (props) => {
  const buttonColor = props.color ? { backgroundColor: props.color } : {};
  const buttonSize = props.size;
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, buttonColor, props.style])}
      onPress={props.onPress}
    >
      <Feather name="plus" size={buttonSize} color={props.iconColor} />
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  iconColor: '#fff',
  size: 26,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 3,
    padding: 15,
    aspectRatio: 1,
    backgroundColor: 'orange',
    borderRadius: 75,
    bottom: 25,
    right: 25,
  },
});

export default ActionButton;
