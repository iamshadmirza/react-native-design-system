import React from 'react';
import {
  Image as RNImage,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {radii, shadows, spaces} from '../util/prop-types';

const getContainerStyle = ({
  theme,
  space,
  shadow,
  outline,
  background,
  radius,
  borderColor,
  aspectRatio,
  width,
  height,
  borderWidth,
}) => {
  const imageStyle = [
    {
      padding: theme.space[space],
      backgroundColor: theme.colors[background],
      borderRadius: theme.radius[radius],
      width,
      height,
      overflow: 'hidden',
      ...theme.shadow[shadow],
    },
  ];
  if (outline) {
    imageStyle.push({
      borderWidth,
      borderColor: theme.colors[borderColor],
    });
  }
  if (aspectRatio) {
    imageStyle.push({
      aspectRatio,
    });
  }
  return imageStyle;
};

const Image = ({style, ...props}) => {
  const theme = useThemeContext();
  const TouchableElement =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={[getContainerStyle({...props, theme}), style]}>
      <TouchableElement
        disabled={typeof props.onPress === 'undefined'}
        style={{flex: 1}}
        onPress={props.onPress}>
        <RNImage {...props} style={{flex: 1}} />
      </TouchableElement>
    </View>
  );
};

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: spaces,
  shadow: shadows,
  outline: PropTypes.bool,
  background: PropTypes.string,
  radius: radii,
  borderColor: PropTypes.string,
  aspectRatio: PropTypes.number,
  borderWidth: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  space: 'none',
  outline: false,
  background: 'bg-200',
  shadow: 'none',
  radius: 'none',
  borderColor: 'outline',
  width: 250,
  height: 250,
  borderWidth: 1,
};

export default Image;
