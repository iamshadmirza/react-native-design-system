import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Avatar from '../Avatar/Avatar';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

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
    return (
      <Avatar source={avatarSource} size="xxsmall" />
    );
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

const renderRightChild = ({ chevron, rightIcon, iconStyle, theme, size, chevronColor }) => {
  return (
    <>
      {rightIcon &&
        <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
          {rightIcon}
        </View>
      }
      {chevron &&
        <View style={StyleSheet.flatten([styles.iconStyle, iconStyle])}>
          <Feather
            name="chevron-right"
            size={theme.iconSize[size]}
            color={theme.brandColor[chevronColor]}
          />
        </View>
      }
    </>
  );
};


const ListItem = ({ style, textStyle, subtitleStyle, ...props }) => {
  const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableElement onPress={props.onPress} disabled={props.disabled} activeOpacity={props.activeOpacity}>
      <View style={StyleSheet.flatten([getContainerStyle(props), style])}>
        {renderLeftChild(props)}
        <View style={styles.textView}>
          <Text style={StyleSheet.flatten([getTextStyle(props), textStyle])}>
            {props.children}
          </Text>
          {props.subtitle &&
            <Text style={StyleSheet.flatten([getSubtitleStyle(props), subtitleStyle])}>
              {props.subtitle}
            </Text>
          }
        </View>
        {renderRightChild(props)}
      </View>
    </TouchableElement>
  );
};

ListItem.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  textAlign: PropTypes.oneOf(['auto', 'left', 'center', 'right', 'justify']),
  children: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  chevronColor: PropTypes.string,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  space: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  onPress: PropTypes.func.isRequired,
  avatarSource: PropTypes.object,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  chevron: PropTypes.bool,
  disabled: PropTypes.bool,
  activeOpacity: PropTypes.number,
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
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

export default withTheme(ListItem);
