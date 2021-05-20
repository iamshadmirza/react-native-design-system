import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import {useThemeContext} from '../util/ThemeProvider';

const getContainerStyle = ({theme, source, square, rounded, size}) => {
  const avatarStyle = [styles.container];
  avatarStyle.push({
    backgroundColor: '#f4f4f4',
    padding: theme.size[size],
    width: theme.avatarSize[size],
    height: theme.avatarSize[size],
    borderRadius: theme.avatarSize[size] * 2,
  });
  if (source) {
    avatarStyle.push({
      padding: 0,
    });
  }
  if (square) {
    avatarStyle.push({
      borderRadius: 0,
    });
  }
  if (rounded) {
    avatarStyle.push({
      borderRadius: 10,
    });
  }
  return avatarStyle;
};

const getEditIconStyle = ({theme, size}) => {
  const iconStyle = [
    styles.editView,
    {
      width: theme.avatarSize[size] / 4,
      height: theme.avatarSize[size] / 4,
      borderRadius: theme.avatarSize[size] / 8,
      backgroundColor: theme.brandColor.disabled,
    },
  ];
  return iconStyle;
};

const getTitleStyle = ({theme, size}) => {
  return {
    fontWeight: '600',
    fontSize: theme.avatarSize[size] / 4,
    color: theme.textColor.disabled,
  };
};

const Avatar = props => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View
      style={StyleSheet.flatten([
        styles.propView,
        {width: theme.avatarSize[props.size]},
      ])}>
      <TouchableElement disabled={!props.editable} {...props}>
        <View
          style={StyleSheet.flatten([
            getContainerStyle({...props, theme}),
            props.style,
          ])}>
          {props.source ? (
            <Image
              source={props.source}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <Text
              numberOfLines={1}
              style={StyleSheet.flatten([
                getTitleStyle({...props, theme}),
                props.textStyle,
              ])}>
              {props.title}
            </Text>
          )}
        </View>
      </TouchableElement>
      {props.editable && (
        <View
          style={StyleSheet.flatten([
            getEditIconStyle({...props, theme}),
            props.editIconStyle,
          ])}>
          <Feather
            name="edit-2"
            size={theme.avatarSize[props.size] / 8}
            color={props.editIconColor || theme.textColor.disabled}
          />
        </View>
      )}
    </View>
  );
};

Avatar.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.object,
  title: PropTypes.string,
  source: PropTypes.object,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
    ]),
    PropTypes.string,
  ]),
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
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  propView: {
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  editView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
});

export default Avatar;
