import React, { Component } from 'react';
import { StyleSheet, View, Animated, PanResponder, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import clamp from 'clamp';
const SWIPE_THRESHOLD = 120;

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            animation: new Animated.ValueXY(),
            opacity: new Animated.Value(1),
            next: new Animated.Value(0.9),
            endOfCards: false,
        };
        this.page = 0;
        this.createPanResponder();
    }

    createPanResponder = () => {
        const { vertical } = this.props;
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                vertical ? this.state.animation.setValue({ x: 0, y: gesture.dy }) : this.state.animation.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (e, { dx, dy, vx, vy }) => {
                let velocity;
                const vxy = vertical ? vy : vx;

                if (vxy >= 0) {
                    velocity = clamp(vxy, 3, 5);
                } else if (vxy < 0) {
                    velocity = clamp(Math.abs(vxy), 3, 5) * -1;
                }

                if (Math.abs(vertical ? dy : dx) > SWIPE_THRESHOLD) {
                    Animated.decay(this.state.animation, {
                        velocity: { x: vertical ? vx : velocity, y: vertical ? velocity : vy },
                        deceleration: 0.98,
                        useNativeDriver: true,
                    }).start(this.transitionNext);
                    if (velocity > 0) {
                        this.handlePositiveDecay();
                    } else {
                        this.handleNegativeDecay();
                    }
                } else {
                    Animated.spring(this.state.animation, {
                        toValue: { x: 0, y: 0 },
                        friction: 4,
                        useNativeDriver: true,
                    }).start();
                }
            },
        });
    }

    handleNegativeDecay = () => {
        this.props.onNegativeSwipe && this.props.onNegativeSwipe();
    }

    handlePositiveDecay = () => {
        this.props.onPositiveSwipe && this.props.onPositiveSwipe();
    }

    transitionNext = () => {
        Animated.parallel([
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.spring(this.state.next, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            }),
        ]).start(() => {
            this.setState(
                (state) => {
                    return {
                        data: state.data.slice(1),
                    };
                },
                () => {
                    this.state.next.setValue(0.9);
                    this.state.opacity.setValue(1);
                    this.state.animation.setValue({ x: 0, y: 0 });
                    this.checkMoreCards();
                },
            );
        });
    };

    checkMoreCards = async () => {
        if (this.state.data.length < 1) {
            if (this.props.loop) {
                return this.setState(state => ({ data: state.data.concat(this.props.data) }));
            }
            this.page++;
            const data = this.props.loadMoreCards ? (await this.props.loadMoreCards(this.page)) : [];
            const endOfCards = data.length === 0;
            this.setState(state => ({ data: state.data.concat(data), endOfCards }));
        }
    }

    getCardStyles = (index, items) => {
        const isLastItem = index === items.length - 1;
        const isSecondToLast = index === items.length - 2;
        const { animation, next } = this.state;
        const { vertical } = this.props;

        const rotate = vertical
            ? '0deg'
            : animation.x.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: ['-30deg', '0deg', '30deg'],
                extrapolate: 'clamp',
            });

        const opacity = vertical
            ? animation.y.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: [0.5, 1, 0.5],
            })
            : animation.x.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: [0.5, 1, 0.5],
            });

        const animatedCardStyles = {
            transform: [{ rotate }, ...animation.getTranslateTransform()],
            opacity,
        };

        const cardStyle = isLastItem ? animatedCardStyles : undefined;
        const nextStyle = isSecondToLast
            ? { transform: [{ scale: next }] }
            : undefined;

        return StyleSheet.flatten([styles.card, cardStyle, nextStyle, this.props.style]);
    }

    render() {
        const { data, endOfCards } = this.state;

        return (
            <View style={styles.container}>
                {endOfCards
                    ? <Text>No more cards</Text>
                    : data
                        .slice(0, 2)
                        .reverse()
                        .map((item, index, items) => {
                            return (
                                <Animated.View
                                    {...this._panResponder.panHandlers}
                                    style={this.getCardStyles(index, items)}
                                    key={this.props.keyExtractor(item)}>
                                    {this.props.renderItem(item)}
                                </Animated.View>
                            );
                        })}
            </View>
        );
    }
}

Deck.propTypes = {
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    vertical: PropTypes.bool,
};

Deck.defaultProps = {
    vertical: false,
    loop: false,
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
        shadow: {
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
        },
        borderWidth: 1,
        borderColor: '#FFF',
    },
});

export default Deck;
