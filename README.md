<h1 align="center">Welcome to react-native-design-system 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.3-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/iamshadmirza/react-native-design-system#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-no-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/iamshadmirza/react-native-design-system/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/iamshadmirza/react-native-design-system/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/iamshadmirza">
    <img alt="Twitter: iamshadmirza" src="https://img.shields.io/twitter/follow/iamshadmirza.svg?style=social" target="_blank" />
  </a>
</p>

> A reusable cross-platform component library and a design language system for react-native.

### 🏠 [Homepage](https://github.com/iamshadmirza/react-native-design-system#readme)

## Install

```sh
npm install react-native-design-system
```

## Usage

```javascript
import { Button } from 'react-native-design-system';

<Button>
  PRESS ME
</Button>

```

## Customization

1. Create a file `theme.config.js` in your root folder
2. Import `theme` from `react-native-design-system` in this file. Here you can override the current values or add new values. 
```js
import theme from './react-native-design-system/src/util/theme';

theme.brandColor.primary = '#ff1744';
theme.brandColor.secondary = '#ff5252';

export default theme;
```  
3. Import it in your root component like this:  
```js
import theme from './theme.config'; 

const App = () => {
  return (
    <ThemeProvider value={theme}>
      //root component
    </ThemeProvider>
  );
}

export default App;

```
4. Alternate shorthand:  
```javascript
//skip default export in theme.config.js
import theme from './react-native-design-system/src/util/theme';

theme.brandColor.primary = '#ff1744';
theme.brandColor.secondary = '#ff5252';
```
```js
//dynamic import at top of your root component
import('./theme.config');

const App = () => {
  return (
    <ThemeProvider value={theme}>
      //root component
    </ThemeProvider>
  );
}
```

## Run tests

```sh
npm run test
```

## Components included:

- [x] [Avatar](src/Avatar/Avatar.js)
- [x] [ActionButton](src/ActionButton/ActionButton.js)
- [x] [Badge](src/Badge/Badge.js)
- [x] [Button](src/Button/Button.js)
- [x] [SlidingButton](src/Button/SlidingButton.js)
- [x] [MenuAddButton](src/Button/MenuAddButton.js)
- [x] [Card](src/Card/Card.js)
- [x] [CheckBox](src/CheckBox/CheckBox.js)
- [x] [CircularProgressBar](src/CircularProgressBar/CircularProgressBar.js)
- [x] [Header](src/Header/Header.js)
- [ ] [Image](src/)
- [x] [Input](src/Input/Input.js)
- [x] [ListItem](src/ListItem/ListItem.js)
- [x] [SlidingListItem](src/SlidingListItem/SlidingListItem.js)
- [x] [FullScreenLoader](src/FullScreenLoader/FullScreenLoader.js)
- [x] [Overlay](src/Overlay/Overlay.js)
- [x] [Box](src/Box/Box.js)
- [x] [Stack](src/Stack/Stack.js)
- [x] [Inline](src/Inline/Inline.js)
- [ ] [Pricing](src/)
- [x] [RadioButton](src/RadioButton/RadioButton.js)
- [x] [SearchBar](src/SearchBar/SearchBar.js)
- [ ] [Social Icons / Social Icon Buttons](src/)
- [ ] [Deck](src/)
- [x] [Text](src/Text/Text.js)
- [ ] [Tooltip](src/)

## Author

👤 **Shad Mirza**

* Twitter: [@iamshadmirza](https://twitter.com/iamshadmirza)
* Github: [@iamshadmirza](https://github.com/iamshadmirza)
* Blogs: [@iamshadmirza](https://iamshadmirza.hashnode.dev)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/iamshadmirza/react-native-design-system/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Shad Mirza](https://github.com/iamshadmirza).<br />
This project is [MIT](https://github.com/iamshadmirza/react-native-design-system/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_