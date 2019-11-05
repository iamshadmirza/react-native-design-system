import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../util/colors';

const MenuAddButton = (props) => {
  const widthStyle = props.width ? { width: props.width } : {};
  const disabledStyle = props.disabled ? styles.inactive : {};
  const colorStyle = props.color ? { color: props.color } : {};
  return (
    <View style={[styles.container, widthStyle, props.style, disabledStyle]}>
      {props.count === 0 || props.disabled ?
        <TouchableOpacity
          activeOpacity={0.5}
          disabled={props.disabled}
          style={styles.primaryButton}
          onPress={props.onIncrement}>
          <Text style={[styles.text, colorStyle, props.textStyle]}>
            ADD
          </Text>
        </TouchableOpacity> :
        <View style={styles.secondaryButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onDecrement}
            style={styles.icon}>
            {props.minusIcon || <MaterialIcons name="remove" color={props.iconColor} size={16} />}
          </TouchableOpacity>
          <View style={styles.countView}>
            <Text style={[styles.text, colorStyle, props.textStyle]}>
              {props.count}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onIncrement}
            style={styles.icon}>
            {props.plusIcon || <MaterialIcons name="add" color={props.iconColor} size={16} />}
          </TouchableOpacity>
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
  color: PropTypes.string,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

MenuAddButton.defaultProps = {
  iconColor: '#333',
  count: 0,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 2,
    width: 100,
    aspectRatio: 5 / 2,
    overflow: 'hidden',
  },
  inactive: {
    backgroundColor: '#e0e0e0',
    elevation: 0,
  },
  inactiveText: {
    color: '#939393',
    fontSize: 13,
    fontStyle: 'italic',
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
  text: {
    color: 'green',
    fontSize: 14,
  },
  countView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey[300],
  },
});

export default MenuAddButton;
