import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, color }) => {
  const headerStyle = [styles.container];
  headerStyle.push({
    backgroundColor: theme.brandColor[color],
  });
  return headerStyle;
};

const getTextStyle = ({ theme, color, textAlign, fontSize }) => {
  const textStyle = [styles.text];
  textStyle.push({
    backgroundColor: theme.brandColor[color],
    fontSize: theme.fontSize[fontSize],
  });
  if (textAlign) {
    textStyle.push({
      textAlign: textAlign,
    });
  }
  return textStyle;
};

const Header = ({ style, textStyle, ...props }) => {
  const theme = useThemeContext();
  const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: theme.brandColor[props.barColor] }]}>
      <StatusBar
        barStyle={props.barStyle}
        backgroundColor={theme.brandColor[props.barColor]}
      />
      <View style={StyleSheet.flatten([getContainerStyle({ ...props, theme }), style])}>
        {props.leftIcon &&
          <TouchableElement {...props} onPress={props.onLeftIconPress}>
            <View style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
              {props.leftIcon}
            </View>
          </TouchableElement>
        }
        {!!props.children &&
          <Text style={StyleSheet.flatten([getTextStyle({ ...props, theme }), textStyle])}>
            {props.children}
          </Text>}
        {props.rightIcon &&
          <TouchableElement {...props} onPress={props.onRightIconPress}>
            <View style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
              {props.rightIcon}
            </View>
          </TouchableElement>
        }
      </View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  textAlign: PropTypes.oneOf(['auto', 'left', 'center', 'right', 'justify']),
  fontSize: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.string,
  color: PropTypes.string,
  leftIcon: PropTypes.element,
  onLeftIconPress: PropTypes.func,
  rightIcon: PropTypes.element,
  onRightIconPress: PropTypes.func,
  iconStyle: PropTypes.object,
  barColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'dark-content', 'light-content']),
};

Header.defaultProps = {
  color: 'primary',
  barColor: 'primary',
  barStyle: 'light-content',
  fontSize: 'medium',
};

const styles = StyleSheet.create({
  safeAreaView: {
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      web: {
        boxShadow: '0 5px 5px rgba(0,0,0,0.10), 1px 5px 5px rgba(0,0,0,0.10)',
      },
    }),
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
      android: 'bold',
      ios: '500',
    }),
    textAlign: Platform.select({
      android: 'left',
      ios: 'center',
      web: 'center',
    }),
    color: '#fff',
    paddingHorizontal: 10,
  },
  iconStyle: {
    padding: 10,
  },
});

export default Header;
