import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
const getContainerStyle = ({theme, size, mini, color, square}: BadgeProps) => {
  const badgeStyle = [styles.container];
  if (color) {
    badgeStyle.push({
      backgroundColor: theme.brandColor[color!],
    });
  }
  if (square) {
    badgeStyle.push({
      borderRadius: 3,
    });
  }
  if (mini) {
    badgeStyle.push({
      width: theme.miniBadgeSize[size!],
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
type BadgeProps = {
  style?: StyleProp<TextStyle>;
  textStyle?: object;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  mini?: boolean;
  onPress?: (...args: any[]) => any;
  square?: boolean;
};
const Badge: React.SFC<BadgeProps> = ({
  children,
  onPress,
  style,
  textStyle,
  ...props
}) => {
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
Badge.defaultProps = {
  children: '0',
  color: 'primary',
  size: 'small',
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      web: {
        boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
      },
    }),
  } as StyleProp<ViewStyle>,
});
export default Badge;
