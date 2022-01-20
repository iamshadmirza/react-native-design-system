import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getContainerStyle = ({
  theme,
  round,
  outline,
  outlineColor,
  error,
  background,
}) => {
  const inputContainerStyle = [styles.container];
  inputContainerStyle.push({
    borderBottomColor: theme.colors[outlineColor],
  });
  if (outline) {
    inputContainerStyle.push({
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors[outlineColor],
      borderBottomColor: theme.colors[outlineColor],
      backgroundColor: theme.colors[background],
      borderRadius: 5,
    });
  }
  if (round) {
    inputContainerStyle.push({
      borderBottomWidth: 0,
      borderRadius: 50,
      backgroundColor: theme.colors[background],
    });
  }
  if (outline && round) {
    inputContainerStyle.push({
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors[outlineColor],
      borderBottomColor: theme.colors[outlineColor],
      backgroundColor: theme.colors[background],
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

const getInputStyle = ({theme, size, textColor, textAlign}) => {
  const inputStyle = [styles.input];
  inputStyle.push({
    fontSize: theme.fontSize[size],
    color: theme.colors[textColor],
    marginVertical: 0,
    textAlign,
  });
  return inputStyle;
};

const getLabelStyle = ({theme, size, labelColor}) => {
  const labelStyle = [
    {
      fontSize: theme.fontSize[size] * 0.8,
      fontWeight: 'bold',
      paddingLeft: 2.5,
      paddingBottom: 5,
      color: theme.colors[labelColor],
    },
  ];
  return labelStyle;
};

const getCaptionStyle = ({theme, size}) => {
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

const Input = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  const showLabel = props.floatingLabel ? props.value.length > 0 : props.label;
  return (
    <View style={props.containerStyle}>
      {showLabel ? (
        <Text
          style={StyleSheet.flatten([
            getLabelStyle({...props, theme}),
            props.labelStyle,
          ])}>
          {props.label}
        </Text>
      ) : null}
      <View
        style={StyleSheet.flatten([
          getContainerStyle({...props, theme}),
          props.style,
        ])}>
        {props.leftIcon && (
          <View style={styles.leftIcon}>{props.leftIcon}</View>
        )}
        <TextInput
          editable={!props.disabled}
          {...props}
          ref={ref}
          style={getInputStyle({...props, theme})}
          placeholderTextColor={theme.colors.subtle}
          placeholder={props.floatingLabel ? props.label : props.placeholder}
        />
        {props.rightIcon && (
          <View style={styles.rightIcon}>{props.rightIcon}</View>
        )}
      </View>
      {props.error && props.errorCaption ? (
        <Text
          style={StyleSheet.flatten([
            getCaptionStyle({...props, theme}),
            props.labelStyle,
          ])}>
          {props.errorCaption}
        </Text>
      ) : null}
    </View>
  );
});

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  floatingLabel: PropTypes.bool,
  labelStyle: PropTypes.object,
  labelColor: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  outlineColor: PropTypes.string,
  round: PropTypes.bool,
  outline: PropTypes.bool,
  error: PropTypes.bool,
  errorCaption: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf([
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  background: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Type here',
  textColor: 'para',
  color: 'subtle',
  size: 'medium',
  labelColor: 'subtle',
  background: 'foreground',
  outlineColor: 'outline',
  floatingLabel: false,
  textAlign: 'left',
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
