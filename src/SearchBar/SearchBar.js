import React from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Input } from '../Input';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const renderIndicator = (props) => {
  return (
    <View style={styles.rightIcons}>
      <View style={styles.indicator}>
        <ActivityIndicator animating={props.loading === true} color={props.indicatorColor} />
      </View>
      {props.onCancel && props.value.length !== 0 &&
        <TouchableOpacity onPress={props.onCancel}>
          {props.rightIcon ||
            <Feather
              name="x-circle"
              size={20}
              color={props.theme.brandColor[props.iconColor]} />
          }
        </TouchableOpacity>
      }
    </View>
  );
};

const SearchBar = React.forwardRef((props, ref) => {
  return (
    <Input
      leftIcon={
        <Feather
          name="search"
          size={20}
          color={props.theme.brandColor[props.iconColor]}
        />
      }
      {...props}
      ref={ref}
      rightIcon={renderIndicator(props)}
    />
  );
});

SearchBar.propTypes = {
  indicatorColor: PropTypes.string,
  loading: PropTypes.bool,
  iconColor: PropTypes.string,
  onCancel: PropTypes.func,
  rightIcon: PropTypes.element,
};

SearchBar.defaultProps = {
  iconColor: 'outline',
  value: '',
  round: true,
  placeholder: 'Search here',
};

const styles = StyleSheet.create({
  rightIcons: {
    flexDirection: 'row',
  },
  indicator: {
    paddingHorizontal: 5,
  },
});

export default withTheme(SearchBar);
