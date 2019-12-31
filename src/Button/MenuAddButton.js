import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../util/colors';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, size, count, disabled }) => {
  const buttonStyle = [styles.container];
  buttonStyle.push({
    width: theme.buttonWidth[size],
    height: theme.buttonWidth[size] / 3,
    flexDirection: 'row',
    justifyContent: 'center',
  });
  if (count === 0) {
    buttonStyle.push({
      backgroundColor: colors.bluegrey[200],
      elevation: 0,
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  if (disabled) {
    buttonStyle.push({
      backgroundColor: theme.brandColor.disabled,
    });
  }
  return buttonStyle;
};

const getTextStyle = ({ theme, size, disabled }) => {
  const textStyle = [{
    fontSize: theme.fontSize[size],
    color: theme.textColor.default,
  }];
  if (disabled) {
    textStyle.push({
      color: theme.textColor.disabled,
    });
  }
  return textStyle;
};

const MenuAddButton = (props) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  if (props.count === 0 || props.disabled) {
    return (
      <TouchableElement
        disabled={props.disabled}
        onPress={props.onIncrement}>
        <View style={[getContainerStyle({ ...props, theme }), props.style]}>
          <Text style={[getTextStyle({ ...props, theme }), props.textStyle]}>
            ADD
            </Text>
        </View>
      </TouchableElement>
    );
  }
  return (
    <View style={[getContainerStyle({ ...props, theme }), props.style]}>
      <TouchableElement onPress={props.onDecrement}>
        <View style={styles.icon}>
          {props.minusIcon ||
            <MaterialIcons
              name="remove"
              color={props.iconColor}
              size={theme.iconSize[props.size]}
            />}
        </View>
      </TouchableElement>
      <View style={styles.countView}>
        <Text style={[getTextStyle({ ...props, theme }), props.textStyle]}>
          {props.count}
        </Text>
      </View>
      <TouchableElement onPress={props.onIncrement}>
        <View style={styles.icon}>
          {props.plusIcon ||
            <MaterialIcons
              name="add"
              color={props.iconColor}
              size={theme.iconSize[props.size]}
            />}
        </View>
      </TouchableElement>
    </View>
  );
};

MenuAddButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  plusIcon: PropTypes.element,
  minusIcon: PropTypes.element,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
};

MenuAddButton.defaultProps = {
  iconColor: '#333',
  count: 0,
  size: 'medium',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 1,
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
    backgroundColor: colors.bluegrey[200],
  },
});

export default MenuAddButton;
