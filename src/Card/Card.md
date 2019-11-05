---
id: card
title: card
---
# Card
Cards are wrapper component with a small padding. It included center, left and right aligned card to auto align children component. All four card types share same props.

## Usage

```javascript
import { Card, LeftAlign, RightAlign, CenterAlign SolidButton } from 'rn-shadow-component';

//default card
<Card>
  <SolidButton>
    CLICK
  </SolidButton>
</Card>

//aligns children to left
<LeftAlign>
  <SolidButton>
    CLICK
  </SolidButton>
</LeftAlign>

//aligns children to right
<RightAlign>
  <SolidButton>
    CLICK
  </SolidButton>
</RightAlign>

//aligns children to center
<CenterAlign>
  <SolidButton>
    CLICK
  </SolidButton>
</CenterAlign>

```

## Renders
![Card]()

## Props

- [`style`](#style)
- [`row`](#row)

## Reference

### style
style prop for container
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### row
makes `flexDirection: 'row'`
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


