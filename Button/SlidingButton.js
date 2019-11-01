import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  I18nManager,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SolidButton from './SolidButton';

// Visit https://github.com/kmagiera/react-native-gesture-handler to learn how to use this component

const withSwipeableStyle = (Component) => {
  return class SlidingButton extends React.PureComponent {
    renderLeftActions = (progress, dragX) => {
      const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [-20, 0, 0, 1],
      });
      return (
        <View style={styles.leftAction} onPress={this.close}>
          <Animated.Text
            style={[
              styles.actionText,
              {
                transform: [{ translateX: trans }],
              },
            ]}>
            Archive
        </Animated.Text>
        </View>
      );
    };

    renderRightAction = (text, color, x, progress) => {
      const trans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [x, 0],
      });
      const pressHandler = () => {
        this.close();
      };
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
          <View
            style={[styles.rightAction, { backgroundColor: color }]}
            onPress={pressHandler}>
            <Text style={styles.actionText}>{text}</Text>
          </View>
        </Animated.View>
      );
    };

    renderRightActions = progress => (
      <View style={styles.rightActionsStyle}>
        {this.renderRightAction('More', '#C8C7CD', 192, progress)}
        {this.renderRightAction('Flag', '#ffab00', 128, progress)}
        {this.renderRightAction('More', '#dd2c00', 64, progress)}
      </View>
    );

    updateRef = ref => {
      this._swipeableRow = ref;
    };

    close = () => {
      this._swipeableRow.close();
    };

    render() {
      return (
        <Swipeable
          ref={this.updateRef}
          friction={2}
          leftThreshold={30}
          rightThreshold={40}
          renderLeftActions={this.renderLeftActions}
          renderRightActions={this.renderRightActions}
          onSwipeableLeftOpen={this.props.onSwipeableLeftOpen}
          {...this.props}
        >
          <Component {...this.props}>
            {this.props.children}
          </Component>
        </Swipeable>
      );
    }
  };
};


const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  rightActionsStyle: {
    width: 192,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
});

export default withSwipeableStyle(SolidButton);
