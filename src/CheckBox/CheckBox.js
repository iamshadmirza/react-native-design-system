import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useThemeContext} from '../util/ThemeProvider';
import {fontBases, fontVariants, sizes} from '../util/prop-types';
import {Text} from '../Text';

const getTextStyle = ({theme, size, textColor, iconRight}) => {
  const textStyle = [
    {
      marginLeft: theme.space.lg,
    },
  ];
  if (iconRight) {
    textStyle.push({
      marginLeft: 0,
      marginRight: 5,
    });
  }
  return textStyle;
};

const renderIcon = ({style, theme, size, color, ...props}) => {
  if (props.checked) {
    return (
      props.checkedIcon || (
        <MaterialIcons
          name="check-box"
          size={theme.fontSize[size] * 1.5}
          color={theme.colors[color]}
        />
      )
    );
  } else {
    return (
      props.uncheckedIcon || (
        <MaterialIcons
          name="check-box-outline-blank"
          size={theme.fontSize[size] * 1.5}
          color={theme.colors[color]}
        />
      )
    );
  }
};

const CheckBox = React.forwardRef(({style, textStyle, ...props}, ref) => {
  const theme = useThemeContext();
  const propsWithTheme = {...props, theme};
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      ref={ref}
      disabled={props.disabled}
      onPress={props.onPress}>
      <View style={StyleSheet.flatten([styles.container, style])}>
        {!props.iconRight && renderIcon(propsWithTheme)}
        {typeof props.children === 'string' ? (
          <Text
            color={props.textColor}
            fontBase={props.fontBase}
            fontVariant={props.fontVariant}
            style={StyleSheet.flatten([
              getTextStyle(propsWithTheme),
              textStyle,
            ])}>
            {props.children}
          </Text>
        ) : (
          props.children
        )}
        {props.iconRight && renderIcon(propsWithTheme)}
      </View>
    </TouchableElement>
  );
});

CheckBox.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  checked: PropTypes.bool,
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: sizes,
  onPress: PropTypes.func.isRequired,
  checkedIcon: PropTypes.element,
  uncheckedIcon: PropTypes.element,
  fontBase: fontBases,
  fontVariant: fontVariants,
};

CheckBox.defaultProps = {
  size: 'md',
  color: 'primary',
  textColor: 'para',
  fontBase: 'body',
  fontVariant: 'regular',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBox;
