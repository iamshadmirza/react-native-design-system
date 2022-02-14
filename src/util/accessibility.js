export const extractAccessibilityPropsFromProps = props => {
  if (!props) {
    return {};
  }

  return {
    accessible: props.accessible,

    accessibilityLabel: props.accessibilityLabel,

    accessibilityRole: props.accessibilityRole,

    accessibilityStates: props.accessibilityStates,

    accessibilityHint: props.accessibilityHint,
  };
};

export const removeAccessibilityPropsFromProps = props => {
  if (!props) {
    return {};
  }
  const {
    accessible,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessibilityHint,
    ...otherProps
  } = props;

  return {
    ...otherProps,
  };
};
