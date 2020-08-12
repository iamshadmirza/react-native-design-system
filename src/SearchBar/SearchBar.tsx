import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../Input/Input';
import {useThemeContext} from '../util/ThemeProvider';
const renderIndicator = (props: SearchBarProps) => {
  const scale = {
    transform: [{scale: props.theme.indicatorSize[props.size]}],
  };
  return (
    <View style={styles.rightIcons}>
      <View style={[styles.indicator, scale]}>
        <ActivityIndicator
          animating={props.loading === true}
          color={props.indicatorColor}
        />
      </View>
      {props.onCancel && props.value.length !== 0 && (
        <TouchableOpacity onPress={props.onCancel}>
          {props.rightIcon || (
            <Feather
              name="x-circle"
              size={20}
              color={props.theme.brandColor[props.iconColor]}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
type SearchBarProps = {
  indicatorColor?: string;
  loading?: boolean;
  iconColor?: string;
  onCancel?: (...args: any[]) => any;
  rightIcon?: JSX.Element;
};
const SearchBar: React.SFC<SearchBarProps> = React.forwardRef((props, ref) => {
  const theme = useThemeContext();
  return (
    <Input
      leftIcon={
        <Feather
          name="search"
          size={20}
          color={theme.brandColor[props.iconColor!]}
        />
      }
      {...props}
      ref={ref}
      rightIcon={renderIndicator({...props, theme})}
    />
  );
});
SearchBar.defaultProps = {
  iconColor: 'outline',
  value: '',
  placeholder: 'Search here',
};
const styles = StyleSheet.create({
  rightIcons: {
    flexDirection: 'row',
  },
  indicator: {
    paddingHorizontal: 10,
  },
});
export default SearchBar;
