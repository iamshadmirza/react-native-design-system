import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useThemeContext} from '../util/ThemeProvider';
const getTextStyle = ({theme, size, textColor, iconRight}: CheckBoxProps) => {
  const textStyle = [
    {
      fontSize: theme.fontSize[size],
      color: theme.textColor[textColor],
      marginLeft: 5,
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
const renderIcon = ({theme, size, color, ...props}: CheckBoxProps) => {
  if (props.checked) {
    return (
      props.checkedIcon || (
        <MaterialIcons
          name="check-box"
          size={theme.fontSize[size] * 1.5}
          color={theme.brandColor[color]}
        />
      )
    );
  } else {
    return (
      props.uncheckedIcon || (
        <MaterialIcons
          name="check-box-outline-blank"
          size={theme.fontSize[size] * 1.5}
          color={theme.brandColor[color]}
        />
      )
    );
  }
};
type CheckBoxProps = {
  style?: object;
  textStyle?: object;
  checked?: boolean;
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
  onPress: (...args: any[]) => any;
  checkedIcon?: JSX.Element;
  uncheckedIcon?: JSX.Element;
};
const CheckBox: React.SFC<CheckBoxProps> = ({style, textStyle, ...props}) => {
  const theme = useThemeContext();
  const propsWithTheme = {...props, theme};
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement
      {...props}
      disabled={props.disabled}
      onPress={props.onPress}>
      <View style={StyleSheet.flatten([styles.container, style])}>
        {!props.iconRight && renderIcon(propsWithTheme)}
        <Text
          style={StyleSheet.flatten([getTextStyle(propsWithTheme), textStyle])}>
          {props.children}
        </Text>
        {props.iconRight && renderIcon(propsWithTheme)}
      </View>
    </TouchableElement>
  );
};
CheckBox.defaultProps = {
  size: 'medium',
  color: 'primary',
  textColor: 'default',
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CheckBox;
