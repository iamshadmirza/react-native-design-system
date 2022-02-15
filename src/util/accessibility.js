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
    accessibilityComponentType: props.accessibilityComponentType,
    accessibilityLiveRegion: props.importantForAccessibility,
    importantForAccessibility: props.accessibilityLiveRegion,
    accessibilityElementsHidden: props.accessibilityElementsHidden,
    accessibilityTraits: props.accessibilityTraits,
    onAccessibilityTap: props.onAccessibilityTap,
    onMagicTap: props.onMagicTap,
    accessibilityIgnoresInvertColors: props.accessibilityIgnoresInvertColors,

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
    accessibilityComponentType, importantForAccessibility,
    accessibilityLiveRegion,
    accessibilityTraits,
    onAccessibilityTap,
    onMagicTap,
    accessibilityIgnoresInvertColors,
    ...otherProps
  } = props;

  return {
    ...otherProps,
  };
};
