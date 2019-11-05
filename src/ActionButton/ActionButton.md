---
id: actionbutton
title: ActionButton
---
# ActionButton
ActionButton are the buttons you use on your landing pages to guide users towards your goal conversion. It's the part of the landing page that the user needs to click in order to take the action you want them to take.

## Usage

```javascript
import { ActionButton } from 'rn-shadow-component';

<ActionButton
  onPress={() => {}}
/>
```

## Renders
![ActionButton]()

## Props

- [`style`](#style)
- [`size`](#size)
- [`color`](#color)
- [`onPress`](#onpress)
- [`iconColor`](#iconColor)

## Reference

### style
style prop for container
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No    |

### size
size of button
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Number | 26 | No |

### color
color for button
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| String | "orange" | No |

### onPress
function to call when clicked
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| function | none | Yes |

### iconColor
color of '+' icon at center
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| String | "white" | No |
