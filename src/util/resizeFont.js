import { Dimensions, PixelRatio } from 'react-native';
const width = Dimensions.get('window').width;

export const resizeFont = (fontSize) => {
  if (width > 550) {
    return (fontSize * 2) / PixelRatio.getFontScale();
  } else {
    return fontSize / PixelRatio.getFontScale();
  }
};
