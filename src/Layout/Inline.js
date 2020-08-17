import React from 'react';
import Stack from './Stack';

const Inline = (props) => {
  return <Stack {...props} direction="horizontal" />;
};

Inline.propTypes = {
  ...Stack.propTypes,
};

Inline.defaultProps = {
  ...Stack.defaultProps,
};

export default Inline;
