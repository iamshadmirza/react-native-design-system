import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
const getContainerStyle = ({theme, color}) => {
  const headerStyle = [styles.container];
  headerStyle.push({
    backgroundColor: theme.brandColor[color!],
  });
  return headerStyle;
};
const getTextStyle = ({theme, color, textAlign, fontSize}) => {
  const textStyle = [styles.text];
  textStyle.push({
    backgroundColor: theme.brandColor[color!],
    fontSize: theme.fontSize[fontSize],
  });
  if (textAlign) {
    textStyle.push({
      textAlign: textAlign,
    });
  }
  return textStyle;
};
type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textAlign?: 'auto' | 'left' | 'center' | 'right' | 'justify';
  fontSize?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  color?: string;
  leftIcon?: JSX.Element;
  onleftIconPress?: (...args: any[]) => any;
  rightIcon?: JSX.Element;
  onRightIconPress?: (...args: any[]) => any;
  iconStyle?: object;
  barColor?: string;
  barStyle?: 'default' | 'dark-content' | 'light-content';
};
const Header: React.SFC<HeaderProps> = ({style, textStyle, ...props}) => {
  const theme = useThemeContext();
  const TouchableElement: React.ElementType =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View
      style={StyleSheet.flatten([getContainerStyle({...props, theme}), style])}>
      <StatusBar
        barStyle={props.barStyle}
        backgroundColor={theme.brandColor[props.barColor!]}
      />
      {props.leftIcon && (
        <TouchableElement {...props} onPress={props.onLeftIconPress!}>
          <View style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
            {props.leftIcon}
          </View>
        </TouchableElement>
      )}
      <Text
        style={StyleSheet.flatten([
          getTextStyle({...props, theme}),
          textStyle,
        ])}>
        {props.children}
      </Text>
      {props.rightIcon && (
        <TouchableElement {...props} onPress={props.onRightIconPress}>
          <View style={StyleSheet.flatten([styles.iconStyle, props.iconStyle])}>
            {props.rightIcon}
          </View>
        </TouchableElement>
      )}
    </View>
  );
};
Header.defaultProps = {
  children: 'Home',
  color: 'primary',
  barColor: 'primary',
  barStyle: 'light-content',
  fontSize: 'medium',
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.select({
      android: 56,
      ios: 64,
      web: 64,
    }),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    ...Platform.select({
      android: {
        elevation: 1,
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
    marginTop: Platform.OS === 'ios' ? 8 : 0,
  },
  iconStyle: {
    padding: 5,
  },
});
export default Header;
