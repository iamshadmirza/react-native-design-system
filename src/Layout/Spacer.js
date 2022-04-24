import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

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
  m: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  mv: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  mh: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  mt: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  mb: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  ml: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  mr: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  p: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  pv: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  ph: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  pt: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  pb: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  pl: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  pr: PropTypes.oneOf([
    'none',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export default Spacer;
