import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar} from '../Avatar';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {
  fontBases,
  fontVariants,
  radii,
  shadows,
  sizes,
  spaces,
} from '../util/prop-types';

const getContainerStyle = ({theme, space, background, shadow, radius}) => {
  const itemStyle = [styles.container];
  itemStyle.push({
    borderColor: theme.colors.outline,
    borderRadius: theme.radius[radius],
    backgroundColor: theme.colors[background],
    paddingVertical: theme.space[space] * 2,
    paddingHorizontal: theme.space[space] * 1.2,
    ...theme.shadow[shadow],
  });
  return itemStyle;
};

const getTextStyle = ({
  theme,
  size,
  textColor,
  textAlign,
  fontBase,
  fontVariant,
}) => {
  return {
    fontSize: theme.fontSize[size],
    fontWeight: '500',
    color: theme.colors[textColor],
    textAlign: textAlign,
    fontFamily: theme.font[fontBase][fontVariant],
  };
};

const getSubtitleStyle = ({
  theme,
  size,
  subtitleColor,
  textAlign,
  subtitleFontBase,
  subtitleFontVariant,
}) => {
  return {
    fontWeight: '400',
    color: theme.colors[subtitleColor],
    textAlign: textAlign,
    marginTop: 3,
    fontFamily: theme.font[subtitleFontBase][subtitleFontVariant],
  };
};

const renderLeftChild = ({avatarSource, leftIcon, iconStyle}) => {
  if (avatarSource) {
    return <Avatar source={avatarSource} size="xs" />;
  }
  if (leftIcon) {
    return (
      <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
        {leftIcon}
      </View>
    );
  }
  return null;
};

const renderRightChild = ({
  chevron,
  rightIcon,
  iconStyle,
  theme,
  size,
  chevronColor,
}) => {
  return (
    <>
      {rightIcon && (
        <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
          {rightIcon}
        </View>
      )}
      {chevron && (
        <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
          <Feather
            name="chevron-right"
            size={theme.iconSize[size]}
            color={theme.colors[chevronColor]}
          />
        </View>
      )}
    </>
  );
};

const ListItem = React.forwardRef(
  (
    {style, textStyle, subtitleStyle, background, subtitleSize, ...props},
    ref,
  ) => {
    const theme = useThemeContext();
    const propsWithTheme = {...props, background, theme};
    const TouchableElement =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <TouchableElement {...props} ref={ref}>
        <View
          style={StyleSheet.flatten([
            getContainerStyle(propsWithTheme),
            style,
          ])}>
          {renderLeftChild(propsWithTheme)}
          <View style={styles.textView}>
            {typeof props.children === 'string' ? (
              <Text
                style={StyleSheet.flatten([
                  getTextStyle(propsWithTheme),
                  textStyle,
                ])}>
                {props.children}
              </Text>
            ) : (
              props.children
            )}
            {props.subtitle &&
              (typeof props.subtitle === 'string' ? (
                <Text
                  size={subtitleSize}
                  style={StyleSheet.flatten([
                    getSubtitleStyle(propsWithTheme),
                    subtitleStyle,
                  ])}>
                  {props.subtitle}
                </Text>
              ) : (
                props.subtitle
              ))}
          </View>
          {renderRightChild(propsWithTheme)}
        </View>
      </TouchableElement>
    );
  },
);

ListItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  subtitleStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  textAlign: PropTypes.oneOf(['auto', 'left', 'center', 'right', 'justify']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  subtitle: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  chevronColor: PropTypes.string,
  size: sizes,
  subtitleSize: sizes,
  space: spaces,
  onPress: PropTypes.func.isRequired,
  avatarSource: PropTypes.object,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  chevron: PropTypes.bool,
  disabled: PropTypes.bool,
  activeOpacity: PropTypes.number,
  shadow: shadows,
  radius: radii,
  /**  Customize button font */
  fontBase: fontBases,
  fontVariant: fontVariants,
  /**  Customize button font */
  subtitleFontBase: fontBases,
  subtitleFontVariant: fontVariants,
};

ListItem.defaultProps = {
  children: 'Pass children to render',
  background: 'bg200',
  textColor: 'para',
  subtitleColor: 'subtle',
  chevronColor: 'body',
  textAlign: 'left',
  space: 'md',
  size: 'md',
  subtitleSize: 'md',
  shadow: 'none',
  radius: 'sm',
  fontBase: 'body',
  fontVariant: 'medium',
  subtitleFontBase: 'body',
  subtitleFontVariant: 'light',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItem;
