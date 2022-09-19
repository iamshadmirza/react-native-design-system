import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  extractAccessibilityPropsFromProps,
  removeAccessibilityPropsFromProps,
} from '../util/accessibility';
import {radii, shadows, sizes} from '../util/prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {removeBackgroundProp} from '../util/touchable';

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
      backgroundColor: theme.colors.bg200,
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

const Avatar = React.forwardRef(({style, ...props}, ref) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  const updateProps = removeBackgroundProp(props);
  return (
    <View
      {...extractAccessibilityPropsFromProps(props)}
      ref={ref}
      style={StyleSheet.flatten([
        styles.propView,
        {width: theme.avatarSize[props.size]},
      ])}>
      <TouchableElement
        disabled={!props.editable}
        {...removeAccessibilityPropsFromProps(updateProps)}>
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
});

Avatar.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  background: PropTypes.string,
  source: PropTypes.object,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  size: sizes,
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
  background: 'bgImage',
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
