import React, { Component } from 'react';
import { StyleSheet, View, Animated, PanResponder, Text, Platform, Dimensions } from 'react-native';
import { FullScreenLoader } from '../FullScreenLoader';
import PropTypes from 'prop-types';
import clamp from 'clamp';
const { width, height } = Dimensions.get('window');

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
        this.SWIPE_THRESHOLD = 0.25 * (props.vertical ? height : width);
        this.page = 0;
        this.createPanResponder();
        this.checkMoreCards();
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
                const minClamp = vertical ? 8 : 4;
                const maxClamp = vertical ? 10 : 5;
                if (vxy >= 0) {
                    velocity = clamp(vxy, minClamp, maxClamp);
                } else if (vxy < 0) {
                    velocity = clamp(Math.abs(vxy), minClamp, maxClamp) * -1;
                }

                if (Math.abs(vertical ? dy : dx) > this.SWIPE_THRESHOLD) {
                    Animated.parallel([
                        Animated.decay(this.state.animation, {
                            velocity: { x: vertical ? 0 : velocity, y: vertical ? velocity : vy },
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
        this.setState(
            (state) => {
                const { data, swiped } = state;
                swiped.push(data.shift());
                return { swiped, data };
            },
            () => {
                this.state.next.setValue(0.9);
                this.state.animation.setValue({ x: 0, y: 0 });
                this.checkMoreCards();
            },
        );
    };

    checkMoreCards = async () => {
        if (this.state.data.length < 2) {
            if (this.props.loop && !this.props.loadInitialData) {
                return this.setState(state => ({ data: state.data.concat(this.props.data) }));
            }
            if (this.props.loadInitialData && this.state.data.length === 0) {
                this.page = -1;
            }
            this.page++;
            this.setState({ loading: true });
            const data = this.props.loadMoreCards ? (await this.props.loadMoreCards(this.page)) : [];
            const endOfCards = data.length === 0;
            this.setState(state => ({ data: state.data.concat(data), endOfCards, loading: false }));
        }
    }

    getCardStyles = (index, items) => {
        const isLastItem = index === items.length - 1;
        const isSecondToLast = index === items.length - 2;
        const { animation, next } = this.state;
        const { vertical, fade } = this.props;

        const rotate = vertical
            ? '0deg'
            : animation.x.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: ['-30deg', '0deg', '30deg'],
                extrapolate: 'clamp',
            });

        const opacity = fade
            ? vertical
                ? animation.y.interpolate({
                    inputRange: [-200, 0, 200],
                    outputRange: [0.5, 1, 0.5],
                })
                : animation.x.interpolate({
                    inputRange: [-200, 0, 200],
                    outputRange: [0.5, 1, 0.5],
                })
            : 1;

        const animatedCardStyles = {
            transform: [{ rotate }, ...animation.getTranslateTransform()],
            opacity,
        };

        const cardStyle = isLastItem ? animatedCardStyles : undefined;
        const nextStyle = isSecondToLast
            ? { transform: [{ scale: next }], borderRadius: 5 }
            : undefined;

        return StyleSheet.flatten([styles.card, cardStyle, nextStyle, this.props.style]);
    }

    renderLoadingScreen() {
        return this.props.loadingScreen || <FullScreenLoader loading />;
    }

    render() {
        const { data, endOfCards, loading } = this.state;

        return (
            <View style={styles.container}>
                {loading
                    ? this.renderLoadingScreen()
                    : endOfCards
                        ? <Text>No more cards</Text>
                        : data
                            .slice(0, 2)
                            .reverse()
                            .map((item, index, items) => {
                                const isLastItem = index === items.length - 1;
                                const panHandlers = isLastItem ? { ...this._panResponder.panHandlers } : {};
                                return (
                                    <Animated.View
                                        {...panHandlers}
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
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    vertical: PropTypes.bool,
    loadInitialData: PropTypes.bool,
    fade: PropTypes.bool,
};

Deck.defaultProps = {
    vertical: false,
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
