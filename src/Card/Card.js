import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {radii, shadows, spaces} from '../util/prop-types';

const getContainerStyle = ({
  row,
  horizontal,
  align,
  vertical,
  theme,
  space,
  shadow,
  outline,
  wrap,
  background,
  radius,
}) => {
  const cardStyle = [
    styles.container,
    {
      padding: theme.space[space],
      backgroundColor: theme.colors[background],
      borderRadius: theme.radius[radius],
    },
  ];
  if (shadow) {
    cardStyle.push(theme.shadow[shadow]);
  }
  if (row) {
    cardStyle.push({
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    });
  }
  if (wrap) {
    cardStyle.push({flexWrap: 'wrap'});
  }
  if (outline) {
    cardStyle.push({
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#333',
    });
  }
  if (align === 'center') {
    cardStyle.push({
      alignItems: 'center',
    });
  }
  if (align === 'left') {
    cardStyle.push({
      alignItems: 'flex-start',
    });
  }
  if (align === 'right') {
    cardStyle.push({
      alignItems: 'flex-end',
    });
  }
  if (horizontal) {
    cardStyle.push({
      paddingVertical: 0,
    });
  }
  if (vertical) {
    cardStyle.push({
      paddingHorizontal: 0,
    });
  }
  return cardStyle;
};

const Card = props => {
  const theme = useThemeContext();
  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        getContainerStyle({...props, theme}),
        props.style,
      ])}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  row: PropTypes.bool,
  wrap: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  space: spaces,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  shadow: shadows,
  outline: PropTypes.bool,
  background: PropTypes.string,
  radius: radii,
};

Card.defaultProps = {
  space: 'lg',
  outline: false,
  background: 'bg-200',
  shadow: 'none',
  radius: 'sm',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default Card;
