import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useThemeContext } from '../util/ThemeProvider';
const getContainerStyle = ({ theme, round, color, outline, error }) => {
  const inputContainerStyle = [styles.container];
  inputContainerStyle.push({
    borderBottomColor: theme.brandColor[color],
  });
  if (outline) {
    inputContainerStyle.push({
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.brandColor[color],
      backgroundColor: theme.brandColor.background,
      borderRadius: 5,
    });
  }
  if (round) {
    inputContainerStyle.push({
      borderBottomWidth: 0,
      borderRadius: 50,
      backgroundColor: theme.brandColor.background,
    });
  }
  if (outline && round) {
    inputContainerStyle.push({
      borderWidth: 1,
      borderBottomWidth: 1,
      backgroundColor: theme.brandColor.background,
    });
  }
  if (error) {
    inputContainerStyle.push({
      borderColor: '#ff000080',
      borderBottomColor: '#ff000080',
      backgroundColor: '#ff000005',
    });
  }
  return inputContainerStyle;
};
const getInputStyle = ({ theme, size, textColor }) => {
  const inputStyle = [styles.input];
  inputStyle.push({
    fontSize: theme.fontSize[size],
    marginVertical: 0,
    color: theme.textColor[textColor],
  });
  return inputStyle;
};
const getLabelStyle = ({ theme, size, labelColor }) => {
  const labelStyle = [
    {
      fontSize: theme.fontSize[size] * 0.8,
      fontWeight: 'bold',
      paddingLeft: 2.5,
      paddingBottom: 5,
      color: theme.textColor[labelColor],
    },
  ];
  return labelStyle;
};
const getCaptionStyle = ({ theme, size }) => {
  const caption = [
    {
      fontSize: theme.fontSize[size] * 0.8,
      fontWeight: '600',
      paddingLeft: 5,
      paddingTop: 5,
      color: '#ff000080',
    },
  ];
  return caption;
};
type InputProps = {
  style?: object,
  textStyle?: object,
  textColor?: string,
  value: string,
  onChangeText: (...args: any[]) => any,
  placeholder?: string,
  floatingLabel?: boolean,
  labelStyle?: object,
  labelColor?: string,
  label?: string,
  color?: string,
  round?: boolean,
  outline?: boolean,
  error?: boolean,
  errorCaption?: string,
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  disabled?: boolean,
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element,
  background?: string
};
const Input: React.SFC<InputProps> = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  const showLabel = props.floatingLabel ? props.value.length > 0 : props.label;
  return (
    <View style={props.containerStyle}>
      {showLabel ? (
        <Text
          style={StyleSheet.flatten([
            getLabelStyle({ ...props, theme }),
            props.labelStyle,
          ])}
        >
          {props.label}
        </Text>
      ) : null}
      <View
        style={StyleSheet.flatten([
          getContainerStyle({ ...props, theme }),
          props.style,
        ])}
      >
        {props.leftIcon && (
          <View style={styles.leftIcon}>{props.leftIcon}</View>
        )}
        <TextInput
          editable={!props.disabled}
          {...props}
          ref={ref}
          style={getInputStyle({ ...props, theme })}
          placeholder={props.floatingLabel ? props.label : props.placeholder}
        />
        {props.rightIcon && (
          <View style={styles.rightIcon}>{props.rightIcon}</View>
        )}
      </View>
      {props.error && props.errorCaption ? (
        <Text
          style={StyleSheet.flatten([
            getCaptionStyle({ ...props, theme }),
            props.labelStyle,
          ])}
        >
          {props.errorCaption}
        </Text>
      ) : null}
    </View>
  );
});
Input.defaultProps = {
  placeholder: 'Type here',
  textColor: 'default',
  color: 'outline',
  size: 'medium',
  labelColor: 'grey',
  background: 'grey',
  floatingLabel: false,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  input: {
    flex: 1,
    padding: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  leftIcon: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Input;
