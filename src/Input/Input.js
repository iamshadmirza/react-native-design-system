import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getContainerStyle = ({ theme, round, color, outline, background }) => {
  const inputContainerStyle = [styles.container];
  inputContainerStyle.push({
    borderBottomColor: theme.brandColor[color],
  });
  if (outline) {
    inputContainerStyle.push({
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.brandColor[color],
      borderRadius: 5,
    });
  }
  if (round) {
    inputContainerStyle.push({
      backgroundColor: theme.brandColor[background],
      borderBottomWidth: 0,
      borderRadius: 50,
    });
  }
  if (outline && round) {
    inputContainerStyle.push({
      borderWidth: 1,
      borderBottomWidth: 1,
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

const getLabelStyle = ({ theme, size, labelColor, value }) => {
  const labelStyle = [{
    fontSize: theme.fontSize[size] * 0.8,
    paddingHorizontal: 10,
    color: theme.textColor[labelColor],
  }];
  if (value.length === 0) {
    labelStyle.push({
      display: 'none',
    });
  }
  return labelStyle;
};

const Input = React.forwardRef((props, ref) => {
  return (
    <View style={props.containerStyle}>
      {props.label &&
        <Text style={StyleSheet.flatten([getLabelStyle(props), props.labelStyle])}>
          {props.label}
        </Text>}
      <View style={StyleSheet.flatten([getContainerStyle(props), props.style])}>
        {props.leftIcon &&
          <View style={styles.leftIcon}>
            {props.leftIcon}
          </View>
        }
        <TextInput
          editable={!props.disabled}
          {...props}
          ref={ref}
          style={getInputStyle(props)}
          placeholder={props.floatingLabel ? props.label : props.placeholder}
        />
        {props.rightIcon &&
          <View style={styles.rightIcon}>
            {props.rightIcon}
          </View>
        }
      </View>
    </View>
  );
});

Input.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  textColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  floatingLabel: PropTypes.bool,
  labelStyle: PropTypes.object,
  labelColor: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  round: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  background: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Type here',
  textColor: 'default',
  color: 'outline',
  size: 'medium',
  labelColor: 'subtle',
  background: 'grey',
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
    paddingVertical: 7.5,
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

export default withTheme(Input);
