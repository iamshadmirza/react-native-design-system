import React from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Input } from '../Input';
import colors from '../util/colors';

const renderIndicator = (props) => {
  return (
    <View style={styles.rightIcons}>
      <View style={styles.indicator}>
        <ActivityIndicator animating={props.loading === true} color={props.indicatorColor} />
      </View>
      {props.value.length !== 0 &&
        <TouchableOpacity onPress={props.onCancel}>
          {props.rightIcon || <Feather name="x-circle" size={20} color={props.color || colors.grey[600]} />}
        </TouchableOpacity>
      }
    </View>
  );
};

const SearchBar = (props) => {
  return (
    <Input
      round
      leftIcon={<Feather name="search" size={20} color={props.color || colors.grey[600]} />}
      {...props}
      placeholder={props.placeholder || 'Search'}
      rightIcon={renderIndicator(props)}
    />
  );
};

const styles = StyleSheet.create({
  rightIcons: {
    flexDirection: 'row',
  },
  indicator: {
    paddingHorizontal: 5,
  },
});

export default SearchBar;
