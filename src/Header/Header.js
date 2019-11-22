import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

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

const Header = (props) => {
  const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={StyleSheet.flatten([getContainerStyle(props), props.style])}>
      <StatusBar
        barStyle={props.barStyle}
        backgroundColor={props.theme.brandColor[props.barColor]}
      />
      {props.leftIcon &&
        <TouchableElement onPress={props.onLeftIconPress}>
          <View style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
            {props.leftIcon}
          </View>
        </TouchableElement>
      }
      <Text style={StyleSheet.flatten([getTextStyle(props), props.textStyle])}>
        {props.children}
      </Text>
      {props.rightIcon &&
        <TouchableElement onPress={props.onRightIconPress}>
          <View style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
            {props.rightIcon}
          </View>
        </TouchableElement>
      }
    </View>
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
  onleftIconPress: PropTypes.func,
  rightIcon: PropTypes.element,
  onRightIconPress: PropTypes.func,
  iconStyle: PropTypes.object,
  barColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'dark-content', 'light-content']),
};

Header.defaultProps = {
  children: 'Home',
  color: 'primary',
  barColor: 'primary',
  barStyle: 'default',
  fontSize: 'medium',
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    width: '100%',
    height: Platform.select({
      android: 56,
      ios: 64,
    }),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    }),
    color: '#fff',
  },
  iconStyle: {
    padding: 5,
  },
});

export default withTheme(Header);
