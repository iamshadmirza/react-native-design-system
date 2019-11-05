import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';

const Overlay = (props) => {
  return (
    <Modal {...props}>
      <View style={StyleSheet.flatten([styles.container, props.style])}>
        <View style={StyleSheet.flatten([styles.contentView, props.overlayStyle])}>
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
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 3,
    width: '80%',
    height: '70%',
  },
});

export default Overlay;
