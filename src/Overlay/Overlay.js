import React from 'react';
import {View, StyleSheet, Modal, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {
  extractAccessibilityPropsFromProps,
  removeAccessibilityPropsFromProps,
} from '../util/accessibility';
import {radii} from '../util/prop-types';

const getContainerStyle = ({theme, background, style}) => {
  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors[background],
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
  radius,
  width,
}) => {
  const contentStyle = [
    {
      elevation: 1,
      backgroundColor: theme.colors[overlayBackground],
      borderRadius: theme.radius[radius],
      width: width,
    },
  ];
  if (overlayStyle) {
    contentStyle.push(overlayStyle);
  }
  return StyleSheet.flatten(contentStyle);
};

const Overlay = props => {
  const theme = useThemeContext();
  const ContainerView = props.onPressOutside ? Pressable : View;
  return (
    <Modal {...removeAccessibilityPropsFromProps(props)}>
      <ContainerView
        {...extractAccessibilityPropsFromProps(props)}
        onPress={props.onPressOutside}
        style={getContainerStyle({...props, theme})}>
        <View style={getChildStyle({...props, theme})}>{props.children}</View>
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
  radius: radii,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Overlay.defaultProps = {
  background: 'semitransparent',
  overlayBackground: 'clearWhite',
  radius: 'lg',
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
