import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const renderIcon = ({ style, ...props }) => {
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement {...props}>
      {props.checked ? (
        props.checkedIcon ||
        <MaterialIcons
          name="check-box"
          size={props.size * 1.2}
          color={props.color}
        />
      ) : (
          props.uncheckedIcon ||
          <MaterialIcons
            name="check-box-outline-blank"
            size={props.size * 1.2}
            color={props.color}
          />
        )}
    </TouchableElement>
  );
};

const CheckBox = (props) => {
  const fontSize = props.size ? { fontSize: props.size } : {};
  return (
    <View style={[styles.container, props.style]}>
      {!props.iconRight && renderIcon(props)}
      <Text style={[styles.text, fontSize, props.textStyle]}>
        {props.children}
      </Text>
      {props.iconRight && renderIcon(props)}
    </View>
  );
};

CheckBox.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  checkedIcon: PropTypes.elementType,
  uncheckedIcon: PropTypes.elementType,
};

CheckBox.defaultProps = {
  children: 'Pass text as children',
  size: 16,
  color: '#333',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 5,
    color: '#333',
  },
});

export default CheckBox;
