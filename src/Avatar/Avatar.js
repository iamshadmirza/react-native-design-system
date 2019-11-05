import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../util/colors';
const DEFAULT_SIZE = 16;

const Avatar = (props) => {
  const containerSize = props.size ? { width: props.size * 4 } : {};
  const roundSize = props.size ? { borderRadius: props.size * 2 } : {};
  const textSize = props.size ? { fontSize: props.size } : {};
  const editViewSize = props.size ? { width: props.size * 1.5, borderRadius: props.size * 1.5 / 2 } : {};
  const squareView = props.square ? { borderRadius: 0 } : {};
  return (
    <TouchableOpacity
      disabled={!props.editable}
      {...props}
      style={StyleSheet.flatten([styles.container, containerSize])}
    >
      <View style={StyleSheet.flatten([styles.roundView, roundSize, squareView, props.style])}>
        {props.source ?
          <Image
            source={props.source}
            resizeMode="contain"
            style={styles.image}
          /> :
          <Text style={StyleSheet.flatten([styles.title, textSize, props.textStyle])}>
            {props.title}
          </Text>
        }
      </View>
      {props.editable ?
        <View style={StyleSheet.flatten([styles.editView, props.editIconStyle, editViewSize])}>
          <Feather
            name="edit-2"
            size={(props.size || DEFAULT_SIZE) * 0.8}
            color={props.editIconColor || '#fff'}
          />
        </View> : null}
      {props.badge ?
        <View style={StyleSheet.flatten([styles.badgeView, props.badgeStyle, editViewSize])}>
          {props.badge}
        </View> : null}
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
  source: PropTypes.object,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.number,
  square: PropTypes.bool,
  editIconStyle: PropTypes.object,
  editIconColor: PropTypes.string,
  badge: PropTypes.elementType,
  badgeStyle: PropTypes.object,
};

Avatar.defaultProps = {
  title: 'MD',
  editable: false,
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    width: DEFAULT_SIZE * 4,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  roundView: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: colors.grey[400],
    borderRadius: DEFAULT_SIZE * 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  editView: {
    position: 'absolute',
    backgroundColor: colors.grey[600],
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    right: 0,
    bottom: 0,
    width: DEFAULT_SIZE * 1.5,
    aspectRatio: 1,
    borderRadius: DEFAULT_SIZE * 1.5 / 2,
  },
  badgeView: {
    position: 'absolute',
    right: -5,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEFAULT_SIZE * 1.5,
    aspectRatio: 1,
    borderRadius: DEFAULT_SIZE * 1.5 / 2,
  },
});

export default Avatar;
