import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar} from '../Avatar';
import {Text} from '../Text';
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
    paddingVertical: theme.buttonSize.paddingVertical[space],
    paddingHorizontal: theme.space[space],
    ...theme.shadow[shadow],
  });
  return itemStyle;
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
            {typeof props.children !== 'function' ? (
              <Text
                color={props.textColor}
                fontBase={props.fontBase}
                fontVariant={props.fontVariant}
                size={props.size}
                textAlign={props.textAlign}
                style={textStyle || {}}>
                {props.children}
              </Text>
            ) : (
              props.children
            )}
            {props.subtitle &&
              (typeof props.subtitle !== 'function' ? (
                <Text
                  size={subtitleSize}
                  fontBase={props.subtitleFontBase}
                  fontVariant={props.subtitleFontVariant}
                  color={props.subtitleColor}
                  textAlign={props.textAlign}
                  style={[{marginTop: 3}, subtitleStyle]}>
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
