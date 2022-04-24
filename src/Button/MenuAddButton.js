import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../util/colors';
import {useThemeContext, useThemeMode} from '../util/ThemeProvider';

const getContainerStyle = ({theme, size, count, disabled, isDarkMode}) => {
  const buttonStyle = [styles.container];
  buttonStyle.push({
    backgroundColor: theme.colors.backgroundLight,
    width: theme.buttonWidth[size],
    height: theme.buttonWidth[size] / 3,
    flexDirection: 'row',
    justifyContent: 'center',
  });
  if (count < 1) {
    buttonStyle.push({
      backgroundColor: isDarkMode
        ? colors['bluegrey-500']
        : colors['bluegrey-200'],
      elevation: 0,
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  if (disabled) {
    buttonStyle.push({
      backgroundColor: theme.colors.disabled,
      elevation: 0,
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  return buttonStyle;
};

const getTextStyle = ({theme, size, disabled}) => {
  const textStyle = [
    {
      fontSize: theme.fontSize[size],
      color: theme.colors.para,
    },
  ];
  if (disabled) {
    textStyle.push({
      color: theme.colors.disabledText,
    });
  }
  return textStyle;
};

const MenuAddButton = ({style, textStyle, ...props}) => {
  const theme = useThemeContext();
  const {isDarkMode} = useThemeMode();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  if (props.count < 1 || props.disabled) {
    return (
      <TouchableElement
        {...props}
        disabled={props.disabled}
        onPress={props.onIncrement}>
        <View style={[getContainerStyle({...props, theme, isDarkMode}), style]}>
          <Text
            style={[getTextStyle({...props, theme, isDarkMode}), textStyle]}>
            ADD
          </Text>
        </View>
      </TouchableElement>
    );
  }
  return (
    <View style={[getContainerStyle({...props, theme}), style]}>
      <TouchableElement {...props} onPress={props.onDecrement}>
        <View style={styles.icon}>
          {props.minusIcon || (
            <MaterialIcons
              name="remove"
              color={props.iconColor || theme.colors.para}
              size={theme.iconSize[props.size]}
            />
          )}
        </View>
      </TouchableElement>
      <View
        style={[
          styles.countView,
          {
            backgroundColor:
              (textStyle && textStyle.backgroundColor) ||
              (isDarkMode ? colors['bluegrey-500'] : colors['bluegrey-200']),
          },
        ]}>
        <Text style={[getTextStyle({...props, theme}), textStyle]}>
          {props.count}
        </Text>
      </View>
      <TouchableElement {...props} onPress={props.onIncrement}>
        <View style={styles.icon}>
          {props.plusIcon || (
            <MaterialIcons
              name="add"
              color={props.iconColor || theme.colors.para}
              size={theme.iconSize[props.size]}
            />
          )}
        </View>
      </TouchableElement>
    </View>
  );
};

MenuAddButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  plusIcon: PropTypes.element,
  minusIcon: PropTypes.element,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
};

MenuAddButton.defaultProps = {
  count: 0,
  size: 'medium',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  icon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  countView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors['bluegrey-200'],
  },
});

export default MenuAddButton;
