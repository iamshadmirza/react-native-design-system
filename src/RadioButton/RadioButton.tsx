import React, {useContext, createContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeContext} from '../util/ThemeProvider';
const Context = createContext();
const {Provider} = Context;
const getTextStyle = ({theme, size, textColor, iconRight}) => {
  const textStyle = [
    {
      fontSize: theme.fontSize[size],
      color: theme.textColor[textColor],
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
          color={theme.brandColor[color]}
        />
      )
    );
  } else {
    return (
      props.uncheckedIcon || (
        <Ionicons
          name="ios-radio-button-off"
          size={theme.fontSize[size] * 1.2}
          color={theme.brandColor[color]}
        />
      )
    );
  }
};
export const RadioItem = ({children, id}) => {
  const {selectItem, style, ...props} = useContext(Context);
  const propsToPass = {...props, id};
  const TouchableElement: React.ElementType =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement {...props} onPress={() => selectItem(id)}>
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
type RadioButtonProps = {
  style?: object;
  textStyle?: object;
  activeId: number | string;
  iconRight?: boolean;
  color?: string;
  textColor?: string;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  selectItem: (...args: any[]) => any;
  checkedIcon?: JSX.Element;
  uncheckedIcon?: JSX.Element;
};
const RadioButton: React.SFC<RadioButtonProps> = ({children, ...props}) => {
  const theme = useThemeContext();
  return <Provider value={{...props, theme}}>{children}</Provider>;
};
RadioButton.defaultProps = {
  size: 'medium',
  color: 'primary',
  textColor: 'default',
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default RadioButton;
