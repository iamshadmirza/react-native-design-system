import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, background, style }) => {
  const containerStyle = [styles.container, {
    backgroundColor: theme.brandColor[background],
  }];
  if (style) {
    containerStyle.push(style);
  }
  return StyleSheet.flatten(containerStyle);
};

const getOverlayStyle = ({ theme, overlayBackground, overlayStyle, borderRadius, width, height }) => {
  const contentStyle = [{
    elevation: 1,
    backgroundColor: theme.brandColor[overlayBackground],
    borderRadius: borderRadius,
    width: width,
    height: height,
  }];
  if (overlayStyle) {
    contentStyle.push(overlayStyle);
  }
  return StyleSheet.flatten(contentStyle);
};

const Overlay = (props) => {
  const theme = useThemeContext();
  return (
    <Modal {...props}>
      <View style={getContainerStyle({ ...props, theme })}>
        <View style={getOverlayStyle({ ...props, theme })}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

Overlay.propTypes = {
  style: PropTypes.object,
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
  height: '70%',
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
