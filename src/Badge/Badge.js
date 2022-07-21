import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {sizes} from '../util/prop-types';

const getContainerStyle = ({theme, size, mini, color, square}) => {
  const badgeStyle = [styles.container];
  if (color) {
    badgeStyle.push({
      backgroundColor: theme.colors[color],
    });
  }
  if (square) {
    badgeStyle.push({
      borderRadius: 3,
    });
  }
  if (mini) {
    badgeStyle.push({
      width: theme.miniBadgeSize[size],
      height: theme.miniBadgeSize[size],
    });
  }
  return badgeStyle;
};

const getTextStyle = ({theme, size}) => {
  return {
    color: '#fff',
    fontSize: theme.badgeSize[size],
    marginVertical: 5,
    marginHorizontal: 10,
  };
};

const Badge = ({children, onPress, style, textStyle, ...props}) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement {...props} onPress={onPress} disabled={!onPress}>
      <View
        style={StyleSheet.flatten(
          StyleSheet.flatten([getContainerStyle({...props, theme}), style]),
        )}>
        {props.mini ? null : (
          <Text
            style={StyleSheet.flatten([
              getTextStyle({...props, theme}),
              textStyle,
            ])}>
            {children}
          </Text>
        )}
      </View>
    </TouchableElement>
  );
};

Badge.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: sizes,
  mini: PropTypes.bool,
  onPress: PropTypes.func,
  square: PropTypes.bool,
};

Badge.defaultProps = {
  children: 0,
  color: 'primary',
  size: 'sm',
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Badge;
