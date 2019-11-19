import colors from './colors';

const theme = {
  fontSize: {
    'xxsmall': 12,
    'xsmall': 14,
    'small': 16,
    'medium': 18,
    'large': 20,
    'xlarge': 22,
    'xxlarge': 24,
  },
  size: {
    'xxsmall': 10,
    'xsmall': 12,
    'small': 14,
    'medium': 16,
    'large': 18,
    'xlarge': 20,
    'xxlarge': 22,
  },
  iconSize: {
    'xxsmall': 16,
    'xsmall': 18,
    'small': 22,
    'medium': 26,
    'large': 28,
    'xlarge': 32,
    'xxlarge': 36,
  },
  avatarSize: {
    'xxsmall': 60,
    'xsmall': 70,
    'small': 80,
    'medium': 90,
    'large': 110,
    'xlarge': 120,
    'xxlarge': 140,
  },
  space: {
    'xxsmall': 0,
    'xsmall': 3,
    'small': 5,
    'medium': 8,
    'large': 10,
    'xlarge': 15,
    'xxlarge': 20,
  },
  textColor: {
    'default': colors.black[300],
    'heading': colors.black[800],
    'subtle': colors.black[100],
    'disabled': colors.bluegrey[400],
    'white': colors.blue[50],
  },
  brandColor: {
    'primary': colors.blue[600],
    'secondary': colors.blue[100],
    'tertiary': colors.yellow.A200,
    'background': '#f8f8f8',
    'disabled': colors.bluegrey[100],
    'white': colors.blue[50],
    'clearWhite': colors.bluegrey[50],
  },
};

export default theme;

