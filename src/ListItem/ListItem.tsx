import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar } from '../Avatar';
import { useThemeContext } from '../util/ThemeProvider';
const getContainerStyle = ({ theme, space, background }) => {
  const itemStyle = [styles.container];
  itemStyle.push({
    borderColor: theme.brandColor.outline,
    backgroundColor: theme.brandColor[background],
    padding: theme.listItemSpace[space],
  });
  return itemStyle;
};
const getTextStyle = ({ theme, size, textColor, textAlign }) => {
  return {
    fontSize: theme.fontSize[size],
    fontWeight: '500',
    color: theme.textColor[textColor],
    textAlign: textAlign,
  };
};
const getSubtitleStyle = ({ theme, size, subtitleColor, textAlign }) => {
  return {
    fontSize: theme.fontSize[size] * 0.7,
    fontWeight: '400',
    color: theme.textColor[subtitleColor],
    textAlign: textAlign,
    marginTop: 3,
  };
};
const renderLeftChild = ({ avatarSource, leftIcon, iconStyle }) => {
  if (avatarSource) {
    return <Avatar source={avatarSource} size="xxsmall" />;
  }
  if (leftIcon) {
    return (
      <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
        {leftIcon}
      </View>
    );
  }
  return null;
};
const renderRightChild = ({
  chevron,
  rightIcon,
  iconStyle,
  theme,
  size,
  chevronColor,
}) => {
  return (
    <>
      {rightIcon && (
        <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
          {rightIcon}
        </View>
      )}
      {chevron && (
        <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
          <Feather
            name="chevron-right"
            size={theme.iconSize[size]}
            color={theme.brandColor[chevronColor]}
          />
        </View>
      )}
    </>
  );
};
type ListItemProps = {
  style?: object,
  textStyle?: object,
  subtitleStyle?: object,
  iconStyle?: object,
  textAlign?: 'auto' | 'left' | 'center' | 'right' | 'justify',
  subtitle?: string,
  background?: string,
  textColor?: string,
  subtitleColor?: string,
  chevronColor?: string,
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  space?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge',
  onPress: (...args: any[]) => any,
  avatarSource?: object,
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element,
  chevron?: boolean,
  disabled?: boolean,
  activeOpacity?: number
};
const ListItem: React.SFC<ListItemProps> = ({
  style,
  textStyle,
  subtitleStyle,
  background,
  ...props
}) => {
  const theme = useThemeContext();
  const propsWithTheme = { ...props, background, theme };
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement {...props}>
      <View
        style={StyleSheet.flatten([getContainerStyle(propsWithTheme), style])}
      >
        {renderLeftChild(propsWithTheme)}
        <View style={styles.textView}>
          <Text
            style={StyleSheet.flatten([
              getTextStyle(propsWithTheme),
              textStyle,
            ])}
          >
            {props.children}
          </Text>
          {props.subtitle && (
            <Text
              style={StyleSheet.flatten([
                getSubtitleStyle(propsWithTheme),
                subtitleStyle,
              ])}
            >
              {props.subtitle}
            </Text>
          )}
        </View>
        {renderRightChild(propsWithTheme)}
      </View>
    </TouchableElement>
  );
};
ListItem.defaultProps = {
  children: 'Pass children to render',
  background: 'clearWhite',
  textColor: 'subtle',
  subtitleColor: 'grey',
  chevronColor: 'outline',
  textAlign: 'left',
  space: 'medium',
  size: 'medium',
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 1,
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
        // boxShadow: `${offsetWidth}px ${offsetHeight}px ${radius}px ${rgba}`
        boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
      },
    }),
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItem;
