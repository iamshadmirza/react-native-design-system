import {Platform} from 'react-native';

export const generateTouchableNativeFeedbackBackground = (
  {background},
  theme,
) => {
  if (!background || Platform.OS === 'ios') {
    return {};
  }
  if (Platform.OS === 'android') {
    return {
      background: {
        borderless: true,
        type: 'RippleAndroid',
        color: theme.colors[background],
      },
    };
  }
};

export const removeBackgroundProp = ({background, ...props}) => {
  return {
    ...props,
  };
};
