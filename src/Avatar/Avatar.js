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
import {radii, shadows, sizes} from '../util/prop-types';
import {
  extractAccessibilityPropsFromProps,
  removeAccessibilityPropsFromProps,
} from '../util/accessibility';

const getContainerStyle = ({
  theme,
  source,
  square,
  rounded,
  size,
  background,
  shadow,
  radius,
}) => {
  const avatarStyle = [styles.container];
  avatarStyle.push({
    backgroundColor: theme.colors[background],
    width: theme.avatarSize[size],
    height: theme.avatarSize[size],
    borderRadius: theme.radius.full,
  });
  if (shadow) {
    avatarStyle.push(theme.shadow[shadow]);
  }
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
      borderRadius: theme.radius.md,
    });
  }
  if (radius) {
    avatarStyle.push({
      borderRadius: theme.radius[radius],
    });
  }
  return avatarStyle;
};

const getEditIconStyle = ({theme, size}) => {
  const iconStyle = [
    styles.editView,
    {
      width: theme.avatarSize[size] / 3,
      height: theme.avatarSize[size] / 3,
      borderRadius: theme.avatarSize[size],
      backgroundColor: theme.colors['bg-200'],
    },
  ];
  return iconStyle;
};

const getTitleStyle = ({theme, size}) => {
  return {
    fontWeight: '600',
    fontSize: theme.avatarSize[size] / 4,
    color: theme.colors.para,
  };
};

const Avatar = ({style, ...props}) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View
      {...extractAccessibilityPropsFromProps(props)}
      style={StyleSheet.flatten([
        styles.propView,
        {width: theme.avatarSize[props.size]},
      ])}>
      <TouchableElement
        disabled={!props.editable}
        {...removeAccessibilityPropsFromProps(props)}>
        <View
          style={StyleSheet.flatten([
            getContainerStyle({...props, theme}),
            style,
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
            size={theme.avatarSize[props.size] / 6}
            color={props.editIconColor || theme.colors.para}
          />
        </View>
      )}
    </View>
  );
};

Avatar.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  background: PropTypes.string,
  source: PropTypes.object,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.oneOfType([sizes, PropTypes.string]),
  square: PropTypes.bool,
  rounded: PropTypes.bool,
  editIconStyle: PropTypes.object,
  editIconColor: PropTypes.string,
  shadow: shadows,
  radius: radii,
};

Avatar.defaultProps = {
  title: 'MD',
  editable: false,
  size: 'lg',
  background: 'bg-100',
  shadow: 'none',
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
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
