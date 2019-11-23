---
id: avatar
title: Avatar
---
# Avatar
Avatar serves as an identity for different users. It can be a container Image or text as name initials.

## Usage

```javascript
import { Avatar } from 'react-native-design-system';

<Avatar
  onPress={() => {}}
  title="AD"
  editable
/>

<Avatar
  onPress={() => {}}
  title="AD"
  square
/>

<Avatar
  onPress={() => {}}
  source={{ uri: 'https://github.com/iamshadmirza.png' }}
/>

<Avatar
  onPress={() => {}}
  source={{ uri: 'https://github.com/iamshadmirza.png' }}
  editable
/>
```

## Renders
![Avatar]()

## Props

- [`style`](#style)
- [`textStyle`](#textStyle)
- [`size`](#size)
- [`editIconColor`](#editIconColor)
- [`source`](#source)
- [`title`](#title)
- [`editable`](#editable)
- [`editIconStyle`](#editIconStyle)
- [`onPress`](#onpress)
- [`square`](#square)
- [`rounded`](#rounded)

## Reference

### style
style prop for container
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### textStyle
style prop for title
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### size
style of Avatar
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| string | 'medium | No

### editIconColor
color for edit icon
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| String | "#fff" | No |

### source
same as prop received by Image
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| object{uri: 'image_url'} or require('file_path') | { url: 'https://github.com/iamshadmirza.png'} | Yes |

### title
name initials
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| String | "MD" | No |

### editable
makes Avatar clickable and adds an edit icon at bottom right
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | false | No |

### editIconStyle
custom style of edit icon
|  Type  | Required |
| :----: | :-----: |
| object (style) |  No |

### onPress
function to call when presses (only works if editable is set to `true`)
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| function | none | Yes (if editable is `true`) |

### square
makes the Avatar square
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | false | No |

### rounded
adds rounded borders
|  Type  | Default | Required |
| :----: | :-----: | :-----: |
| Boolean | false | No |

