import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import withTheme from '../util/withTheme';

const getTextStyle = ({ theme, size, textColor, iconRight }) => {
  const textStyle = [{
    fontSize: theme.fontSize[size],
    color: theme.textColor[textColor],
    marginLeft: 5,
  }];
  if (iconRight) {
    textStyle.push({
      marginLeft: 0,
      marginRight: 5,
    });
  }
  return textStyle;
};

const renderIcon = ({ style, theme, size, color, ...props }) => {
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement {...props}>
      {props.checked ? (
        props.checkedIcon ||
        <MaterialIcons
          name="check-box"
          size={theme.fontSize[size] * 1.5}
          color={theme.brandColor[color]}
        />
      ) : (
          props.uncheckedIcon ||
          <MaterialIcons
            name="check-box-outline-blank"
            size={theme.fontSize[size] * 1.5}
            color={theme.brandColor[color]}
          />
        )}
    </TouchableElement>
  );
};

const CheckBox = (props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, props.style])}>
      {!props.iconRight && renderIcon(props)}
      <Text style={StyleSheet.flatten([getTextStyle(props), props.textStyle])}>
        {props.children}
      </Text>
      {props.iconRight && renderIcon(props)}
    </View>
  );
};

CheckBox.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  onPress: PropTypes.func.isRequired,
  checkedIcon: PropTypes.elementType,
  uncheckedIcon: PropTypes.elementType,
};

CheckBox.defaultProps = {
  children: 'Pass text as child',
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

export default withTheme(CheckBox);
