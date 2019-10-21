import React from 'react';
import { TouchableNativeFeedback, View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../src/util/colors';
const DEFAULT_SIZE = 26;
import shad from '../util/shad.jpg';

const Avatar = (props) => {
  const containerSize = props.size ? {
    borderRadius: props.size * 3 / 2,
    width: props.size * 3,
  } : {};
  const textSize = props.size ? { fontSize: props.size } : {};
  return (
    <TouchableNativeFeedback>
      <View style={StyleSheet.flatten([styles.container, props.style, containerSize])}>
        {props.source ?
          <Image source={props.source || shad} resizeMode="contain" style={styles.image} /> :
          <Text style={StyleSheet.flatten([styles.title, textSize])}>
            {props.title || 'MD'}
          </Text>
        }
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: DEFAULT_SIZE * 3 / 2,
    width: DEFAULT_SIZE * 3,
    backgroundColor: colors.grey[300],
    justifyContent: 'center',
  },
  title: {
    fontSize: DEFAULT_SIZE,
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
