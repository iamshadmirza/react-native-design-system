import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import withTheme from '../util/withTheme';

const getContainerStyle = ({ theme, source, square, rounded, size }) => {
  return {
    ...styles.container,
    backgroundColor: theme.brandColor.clearWhite,
    padding: source ? 0 : theme.size[size],
    width: theme.avatarSize[size],
    borderRadius: square ? 0 :
      rounded ? 10 : theme.avatarSize[size] * 2,
  };
};

const getEditIconStyle = ({ theme, size }) => {
  return {
    ...styles.editView,
    width: theme.avatarSize[size] / 4,
    borderRadius: theme.avatarSize[size] / 8,
    backgroundColor: theme.brandColor.disabled,
  };
};

const getTitleStyle = ({ theme, size }) => {
  return {
    ...styles.title,
    fontSize: theme.avatarSize[size] / 4,
    color: theme.textColor.disabled,
  };
};

const Avatar = (props) => {
  return (
    <View style={StyleSheet.flatten([styles.propView, { width: props.theme.avatarSize[props.size] }])}>
      <TouchableOpacity
        disabled={!props.editable}
        {...props}
        style={StyleSheet.flatten([getContainerStyle(props), props.style])}
      >
        {props.source ?
          <Image
            source={props.source}
            resizeMode="cover"
            style={styles.image}
          /> :
          <Text style={StyleSheet.flatten([getTitleStyle(props), props.textStyle])}>
            {props.title}
          </Text>
        }
      </TouchableOpacity>
      {props.editable &&
        <View style={StyleSheet.flatten([getEditIconStyle(props), props.editIconStyle])}>
          <Feather
            name="edit-2"
            size={props.theme.avatarSize[props.size] / 8}
            color={props.editIconColor || props.theme.textColor.disabled}
          />
        </View>}
    </View>
  );
};

Avatar.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
  source: PropTypes.object,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  square: PropTypes.bool,
  rounded: PropTypes.bool,
  editIconStyle: PropTypes.object,
  editIconColor: PropTypes.string,
};

Avatar.defaultProps = {
  title: 'MD',
  editable: false,
  size: 'medium',
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  propView: {
    backgroundColor: 'transparent',
    aspectRatio: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  editView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    right: 0,
    bottom: 0,
    aspectRatio: 1,
  },
});

export default withTheme(Avatar);
