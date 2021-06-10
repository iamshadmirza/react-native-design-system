import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import {FullScreenLoader} from '../FullScreenLoader';
import PropTypes from 'prop-types';
import clamp from 'clamp';
const {height} = Dimensions.get('window');

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      swiped: [],
      animation: new Animated.ValueXY(),
      next: new Animated.Value(0.9),
      endOfCards: false,
      loading: props.loadInitialData ? true : false,
    };
    this.SWIPE_THRESHOLD = 0.3 * height;
    this.page = 0;
    this.createPanResponder();
  }

  componentDidMount() {
    this.checkMoreCards();
  }

  createPanResponder = () => {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.state.animation.setValue({x: 0, y: gesture.dy});
      },
      onPanResponderRelease: (e, {dx, dy, vx, vy}) => {
        let velocity;
        if (vy >= 0) {
          velocity = clamp(vy, 8, 10);
        } else if (vy < 0) {
          velocity = clamp(Math.abs(vy), 8, 10) * -1;
        }

        if (Math.abs(dy) > this.SWIPE_THRESHOLD) {
          Animated.parallel([
            Animated.decay(this.state.animation, {
              velocity: {x: 0, y: velocity},
              deceleration: 0.99,
              useNativeDriver: true,
            }),
            Animated.spring(this.state.next, {
              toValue: 1,
              friction: 4,
              useNativeDriver: true,
            }),
          ]).start(this.transitionNext);
          if (velocity > 0) {
            this.handlePositiveDecay();
          } else {
            this.handleNegativeDecay();
          }
        } else {
          Animated.spring(this.state.animation, {
            toValue: {x: 0, y: 0},
            friction: 4,
            useNativeDriver: true,
          }).start();
        }
      },
    });
  };

  handleNegativeDecay = () => {
    this.props.onNegativeSwipe && this.props.onNegativeSwipe();
  };

  handlePositiveDecay = () => {
    this.props.onPositiveSwipe && this.props.onPositiveSwipe();
  };

  transitionNext = () => {
    this.setState(
      (state) => {
        const {data, swiped} = state;
        swiped.push(data.shift());
        return {swiped, data};
      },
      () => {
        this.state.next.setValue(0.9);
        this.state.animation.setValue({x: 0, y: 0});
        this.checkMoreCards();
      },
    );
  };

  checkMoreCards = async () => {
    if (this.state.data.length < 2) {
      if (this.props.loop && !this.props.loadInitialData) {
        return this.setState((state) => ({
          data: state.data.concat(this.state.swiped),
        }));
      }
      if (this.props.loadInitialData && this.state.data.length === 0) {
        this.page = -1;
      }
      this.page++;
      this.setState({loading: true});
      const data = this.props.loadMoreCards
        ? await this.props.loadMoreCards(this.page)
        : [];
      const endOfCards = data.length === 0;
      this.setState((state) => ({
        data: state.data.concat(data),
        endOfCards,
        loading: false,
      }));
    }
  };

  getCardStyles = (index, items) => {
    const isLastItem = index === items.length - 1;
    const isSecondToLast = index === items.length - 2;
    const {animation, next} = this.state;
    const {fade} = this.props;
    const rotate = '0deg';

    const opacity = fade
      ? animation.y.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: [0.5, 1, 0.5],
        })
      : 1;

    const animatedCardStyles = {
      transform: [{rotate}, ...animation.getTranslateTransform()],
      opacity,
    };

    const cardStyle = isLastItem ? animatedCardStyles : undefined;
    const nextStyle = isSecondToLast
      ? {transform: [{scale: next}], borderRadius: 5}
      : undefined;

    return StyleSheet.flatten([
      styles.card,
      cardStyle,
      nextStyle,
      this.props.style,
    ]);
  };

  renderLoadingScreen() {
    return this.props.loadingScreen || <FullScreenLoader loading />;
  }

  render() {
    const {data, endOfCards, loading} = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          this.renderLoadingScreen()
        ) : endOfCards ? (
          <Text>No more cards</Text>
        ) : (
          data
            .slice(0, 2)
            .reverse()
            .map((item, index, items) => {
              const isLastItem = index === items.length - 1;
              const panHandlers = isLastItem
                ? {...this._panResponder.panHandlers}
                : {};
              return (
                <Animated.View
                  {...panHandlers}
                  style={this.getCardStyles(index, items)}
                  key={this.props.keyExtractor(item)}>
                  {this.props.renderItem(item)}
                </Animated.View>
              );
            })
        )}
      </View>
    );
  }
}

Deck.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  loadMoreCards: PropTypes.func,
  onNegativeSwipe: PropTypes.func,
  onPositiveSwipe: PropTypes.func,
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  loadInitialData: PropTypes.bool,
  fade: PropTypes.bool,
  loop: PropTypes.bool,
  loadingScreen: PropTypes.element,
};

Deck.defaultProps = {
  direction: 'horizontal',
  loop: false,
  loadInitialData: false,
  fade: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 3,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      web: {
        boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
      },
    }),
    borderWidth: 1,
    borderColor: '#FFF',
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontStyle: 'italic',
    fontSize: 18,
  },
});

export default Deck;
