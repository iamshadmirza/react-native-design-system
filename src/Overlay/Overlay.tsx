import React from 'react';
import {View, StyleSheet, Modal, ViewStyle, StyleProp} from 'react-native';
import {useThemeContext} from '../util/ThemeProvider';
const getContainerStyle = ({theme, background, style}: OverlayProps) => {
  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.brandColor[background],
    },
  ];
  if (style) {
    containerStyle.push(style);
  }
  return StyleSheet.flatten(containerStyle);
};
const getOverlayStyle = ({
  theme,
  overlayBackground,
  overlayStyle,
  borderRadius,
  width,
  height,
}: OverlayProps) => {
  const contentStyle = [
    {
      elevation: 1,
      backgroundColor: theme.brandColor[overlayBackground],
      borderRadius: borderRadius,
      width: width,
      height: height,
    },
  ];
  if (overlayStyle) {
    contentStyle.push(overlayStyle);
  }
  return StyleSheet.flatten(contentStyle);
};
type OverlayProps = {
  style?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  background?: string;
  overlayBackground?: string;
  borderRadius?: number;
  width?: number | string;
  height?: number | string;
};
const Overlay: React.SFC<OverlayProps> = props => {
  const theme = useThemeContext();
  return (
    <Modal {...props}>
      <View style={getContainerStyle({...props, theme})}>
        <View style={getOverlayStyle({...props, theme})}>{props.children}</View>
      </View>
    </Modal>
  );
};
Overlay.defaultProps = {
  background: 'semitransparent',
  overlayBackground: 'clearWhite',
  borderRadius: 3,
  width: '80%',
  height: '70%',
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Overlay;
