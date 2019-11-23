---
id: badge
title: Badge
---
# Badge
Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.

## Usage

```javascript
import { Badge } from 'react-native-design-system';

<Badge>12</Badge>
<Badge color="tertiary">15000</Badge>
<Badge mini color="primary" />

```

## Renders
![Badge]()

## Props

- [`style`](#style)
- [`textStyle`](#textStyle)
- [`children`](#children)
- [`mini`](#mini)
- [`onPress`](#onpress)

## Reference

### style
style prop for container
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### textStyle
style prop for text
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### children
Text to render inside badge
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Text | null | Yes |

### mini
enable mini badge, helps in showing online status
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | `false` | No |

### onPress
function to call when presses (only works if editable is set to `true`)
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| function | none | No |


