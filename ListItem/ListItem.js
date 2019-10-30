import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../util/colors';

const ListItem = (props) => {
  const textPlacement = props.textAlign ? { textAlign: props.textAlign } : {};
  const colorStyle = props.color ? { backgroundColor: props.color } : {};
  const heightStyle = props.height ? { height: props.height } : {};
  return (
    <TouchableOpacity activeOpacity={0.8} {...props} style={StyleSheet.flatten([styles.container, heightStyle, colorStyle, props.style])}>
      {props.leftIcon &&
        <View style={[styles.iconStyle, props.iconStyle]}>
          {props.leftIcon}
        </View>}
      <View style={styles.textView}>
        <Text style={StyleSheet.flatten([styles.text, textPlacement, props.textStyle])}>
          {props.children}
        </Text>
        {props.subtitle &&
        <Text style={StyleSheet.flatten([styles.subtitle, textPlacement, props.subtitleStyle])}>
          {props.subtitle}
        </Text>}
      </View>
      {props.rightIcon && <View style={[styles.iconStyle, props.iconStyle]}>
        {props.rightIcon}
      </View>}
      {props.chevron && <View style={[styles.iconStyle, props.iconStyle]}>
        <Feather name="chevron-right" size={26} color={colors.grey[400]}  />
      </View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey[400],
    height: Platform.OS === 'android' ? 56 : 64,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.grey[500],
  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItem;
