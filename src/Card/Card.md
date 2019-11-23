---
id: card
title: card
---
# Card
Cards are wrapper component with a small padding. It included center, left and right aligned card to auto align children component. All four card types share same props.

## Usage

```javascript
import { Card, Button } from 'react-native-design-system';

//default card
<Card>
  <Button>
    CLICK
  </Button>
</Card>

//aligns children to left
<Card left>
  <Button>
    CLICK
  </Button>
</Card>

//aligns children to right
<Card right>
  <Button>
    CLICK
  </Button>
</Card>

//aligns children to center
<Card center>
  <Button>
    CLICK
  </Button>
</Card>

```

## Renders
![Card]()

## Props

- [`style`](#style)
- [`space`](#space)
- [`row`](#row)
- [`center`](#center)
- [`left`](#left)
- [`right`](#right)
- [`horizontal`](#horizontal)
- [`vertical`](#vertical)

## Reference

### style
style prop for container
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### space
padding for Card view
|  Type  | Required | Options |
| :----: | :-----: | :-----: |
| sring |  No | ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']|

### row
aligns childrens in row
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### children
Text to render inside badge
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Text | null | Yes |

### center
center aligns children
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | `false` | No |

### left
left aligns children
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | `false` | No |

### right
right aligns children
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | `false` | No |

### horizontal
horizontal keps horizontal padding only
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | `false` | No |

### vertical
vertical keeps vertical padding only
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | `false` | No |


