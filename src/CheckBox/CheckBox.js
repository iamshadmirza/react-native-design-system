import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const renderIcon = (props) => {
  if (props.checked){
    return (
      props.checkedIcon ||
      <MaterialIcons
        name="check-box"
        size={props.size * 1.5 || 24}
        color={props.color || '#000'}
      />
    );
  } else {
    return (
      props.uncheckedIcon ||
      <MaterialIcons
        name="check-box-outline-blank"
        size={props.size * 1.5 || 24}
        color={props.color || '#000'}
      />
    );
  }
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

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 5,
    color: '#333',
  },
});

export default CheckBox;
