import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {spaces} from '../util/prop-types';

const getContainerStyle = ({
  theme,
  m,
  mv,
  mh,
  mt,
  mb,
  ml,
  mr,
  p,
  pv,
  ph,
  pt,
  pb,
  pl,
  pr,
}) => {
  const style = {};
  if (m) {
    style.margin = theme.space[m];
  }
  if (mv) {
    style.marginVerticle = theme.space[mv];
  }
  if (mh) {
    style.marginHorizontal = theme.space[mh];
  }
  if (mt) {
    style.marginTop = theme.space[mt];
  }
  if (mb) {
    style.marginBottom = theme.space[mb];
  }
  if (ml) {
    style.marginLeft = theme.space[ml];
  }
  if (mr) {
    style.marginRight = theme.space[mr];
  }
  if (p) {
    style.padding = theme.space[p];
  }
  if (pv) {
    style.paddingVerticle = theme.space[pv];
  }
  if (ph) {
    style.paddingHorizontal = theme.space[ph];
  }
  if (pt) {
    style.paddingTop = theme.space[pt];
  }
  if (pb) {
    style.paddingBottom = theme.space[pb];
  }
  if (pl) {
    style.paddingLeft = theme.space[pl];
  }
  if (pr) {
    style.paddingRight = theme.space[pr];
  }
  return style;
};

const Spacer = ({style, children, ...props}) => {
  const theme = useThemeContext();
  return (
    <View style={[getContainerStyle({theme, ...props}), style]}>
      {children}
    </View>
  );
};

Spacer.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  m: spaces,
  mv: spaces,
  mh: spaces,
  mt: spaces,
  mb: spaces,
  ml: spaces,
  mr: spaces,
  p: spaces,
  pv: spaces,
  ph: spaces,
  pt: spaces,
  pb: spaces,
  pl: spaces,
  pr: spaces,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export default Spacer;
