import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../util/colors';
import withTheme from '../util/withTheme';

const getContainerStyle = ({ theme, size, disabled }) => {
  const buttonStyle = [styles.container];
  buttonStyle.push({
    width: theme.buttonWidth[size],
  });
  if (disabled) {
    buttonStyle.push({
      backgroundColor: theme.brandColor.disabled,
      elevation: 0,
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
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={[getContainerStyle(props), props.style]}>
      {props.count === 0 || props.disabled ?
        <TouchableElement
          disabled={props.disabled}
          onPress={props.onIncrement}>
          <View style={styles.primaryButton}>
            <Text style={[getTextStyle(props), props.textStyle]}>
              ADD
              </Text>
          </View>
        </TouchableElement> :
        <View style={styles.secondaryButton}>
          <TouchableElement onPress={props.onDecrement}>
            <View style={styles.icon}>
              {props.minusIcon ||
                <MaterialIcons
                  name="remove"
                  color={props.iconColor}
                  size={props.theme.iconSize[props.size]}
                />}
            </View>
          </TouchableElement>
          <View style={styles.countView}>
            <Text style={[getTextStyle(props), props.textStyle]}>
              {props.count}
            </Text>
          </View>
          <TouchableElement onPress={props.onIncrement}>
            <View style={styles.icon}>
              {props.plusIcon ||
                <MaterialIcons
                  name="add"
                  color={props.iconColor}
                  size={props.theme.iconSize[props.size]}
                />}
            </View>
          </TouchableElement>
        </View>
      }
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
  size: 'small',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 1,
    aspectRatio: 5 / 2,
    overflow: 'hidden',
  },
  primaryButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bluegrey[100],
  },
});

export default withTheme(MenuAddButton);
