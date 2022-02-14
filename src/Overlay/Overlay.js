import React from 'react';
import { View, StyleSheet, Modal, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';
import { extractAccessibilityPropsFromProps, removeAccessibilityPropsFromProps } from '../util/accesibility';

const getContainerStyle = ({ theme, background, style }) => {
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

const getChildStyle = ({
  theme,
  overlayBackground,
  overlayStyle,
  borderRadius,
  width,
}) => {
  const contentStyle = [
    {
      elevation: 1,
      backgroundColor: theme.brandColor[overlayBackground],
      borderRadius: borderRadius,
      width: width,
    },
  ];
  if (overlayStyle) {
    contentStyle.push(overlayStyle);
  }
  return StyleSheet.flatten(contentStyle);
};

const Overlay = (props) => {
  const theme = useThemeContext();
  const ContainerView = props.onPressOutside ? Pressable : View;
  return (
    <Modal {...removeAccessibilityPropsFromProps(props)}>
      <ContainerView
        {...extractAccessibilityPropsFromProps(props)}
        onPress={props.onPressOutside}
        style={getContainerStyle({ ...props, theme })}>
        <View style={getChildStyle({ ...props, theme })}>{props.children}</View>
      </ContainerView>
    </Modal>
  );
};

Overlay.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overlayStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  background: PropTypes.string,
  overlayBackground: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Overlay.defaultProps = {
  background: 'semitransparent',
  overlayBackground: 'clearWhite',
  borderRadius: 3,
  width: '80%',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
