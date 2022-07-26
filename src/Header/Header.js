import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {extractAccessibilityPropsFromProps} from '../util/accessibility';
import {shadows, sizes} from '../util/prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getContainerStyle = ({theme, color}) => {
  const headerStyle = [styles.container];
  headerStyle.push({
    backgroundColor: theme.colors[color],
  });
  return headerStyle;
};

const getTextStyle = ({theme, color, textAlign, fontSize}) => {
  const textStyle = [styles.text];
  textStyle.push({
    backgroundColor: theme.colors[color],
    fontSize: theme.fontSize[fontSize],
  });
  if (textAlign) {
    textStyle.push({
      textAlign: textAlign,
    });
  }
  return textStyle;
};

const Header = React.forwardRef(({style, textStyle, shadow, ...props}, ref) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <SafeAreaView
      {...extractAccessibilityPropsFromProps(props)}
      style={[
        styles.safeAreaView,
        {
          backgroundColor: theme.colors[props.barColor],
          ...theme.shadow[shadow],
        },
      ]}>
      <StatusBar
        barStyle={props.barStyle}
        backgroundColor={theme.colors[props.barColor]}
      />
      <View
        ref={ref}
        style={StyleSheet.flatten([
          getContainerStyle({...props, theme}),
          style,
        ])}>
        {props.leftIcon && (
          <TouchableElement {...props} onPress={props.onLeftIconPress}>
            <View
              style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
              {props.leftIcon}
            </View>
          </TouchableElement>
        )}
        {!!props.children && (
          <Text
            style={StyleSheet.flatten([
              getTextStyle({...props, theme}),
              textStyle,
            ])}>
            {props.children}
          </Text>
        )}
        {props.rightIcon && (
          <TouchableElement {...props} onPress={props.onRightIconPress}>
            <View
              style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
              {props.rightIcon}
            </View>
          </TouchableElement>
        )}
      </View>
    </SafeAreaView>
  );
});

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textAlign: PropTypes.oneOf(['auto', 'left', 'center', 'right', 'justify']),
  fontSize: sizes,
  children: PropTypes.string,
  color: PropTypes.string,
  leftIcon: PropTypes.element,
  onLeftIconPress: PropTypes.func,
  rightIcon: PropTypes.element,
  onRightIconPress: PropTypes.func,
  iconStyle: PropTypes.object,
  barColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'dark-content', 'light-content']),
  shadow: shadows,
};

Header.defaultProps = {
  color: 'primary',
  barColor: 'primary',
  barStyle: 'light-content',
  fontSize: 'md',
  shadow: 'md',
};

const styles = StyleSheet.create({
  safeAreaView: {
    zIndex: 10,
  },
  container: {
    width: '100%',
    height: Platform.select({
      android: 56,
      ios: 56,
      web: 64,
    }),
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  text: {
    flex: 1,
    fontWeight: Platform.select({
      android: '600',
      ios: '500',
      web: '600',
    }),
    textAlign: Platform.select({
      android: 'left',
      ios: 'center',
      web: 'left',
    }),
    color: '#fff',
    paddingHorizontal: 15,
  },
  iconStyle: {
    padding: 10,
  },
});

export default Header;
