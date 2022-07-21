import React, {useContext, createContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeContext} from '../util/ThemeProvider';
import {extractAccessibilityPropsFromProps} from '../util/accessibility';
import {sizes} from '../util/prop-types';
const Context = createContext();
const {Provider} = Context;

const getTextStyle = ({theme, size, textColor, iconRight}) => {
  const textStyle = [
    {
      fontSize: theme.fontSize[size],
      color: theme.colors[textColor],
      marginLeft: 10,
      marginVertical: 2.5,
    },
  ];
  if (iconRight) {
    textStyle.push({
      marginLeft: 0,
      marginRight: 10,
    });
  }
  return textStyle;
};

const renderIcon = ({theme, size, color, id, activeId, ...props}) => {
  if (activeId === id) {
    return (
      props.checkedIcon || (
        <Ionicons
          name="ios-radio-button-on"
          size={theme.fontSize[size] * 1.2}
          color={theme.colors[color]}
        />
      )
    );
  } else {
    return (
      props.uncheckedIcon || (
        <Ionicons
          name="ios-radio-button-off"
          size={theme.fontSize[size] * 1.2}
          color={theme.colors[color]}
        />
      )
    );
  }
};

export const RadioItem = ({children, id, ...otherProps}) => {
  const {selectItem, style, ...props} = useContext(Context);
  const propsToPass = {...props, id};
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      {...extractAccessibilityPropsFromProps(otherProps)}
      onPress={() => selectItem(id)}>
      <View style={[styles.itemContainer, style]}>
        {!props.iconRight && renderIcon(propsToPass)}
        <Text
          style={StyleSheet.flatten([
            getTextStyle(propsToPass),
            props.textStyle,
          ])}>
          {children}
        </Text>
        {props.iconRight && renderIcon(propsToPass)}
      </View>
    </TouchableElement>
  );
};

const RadioButton = ({children, ...props}) => {
  const theme = useThemeContext();
  return <Provider value={{...props, theme}}>{children}</Provider>;
};

RadioButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  activeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: sizes,
  selectItem: PropTypes.func.isRequired,
  checkedIcon: PropTypes.element,
  uncheckedIcon: PropTypes.element,
};

RadioButton.defaultProps = {
  size: 'md',
  color: 'primary',
  textColor: 'para',
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RadioButton;
