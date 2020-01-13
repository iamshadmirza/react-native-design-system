# Contributing to React Native Design System
Hey there! 🙋‍♂️ Thanks for contributing to React Native Design System

## Ways to contribute
* Reporting a bug
* Adding Storybook docs
* Adding components
* Suggesting UI enhancement

## How to contribute
React Native Design System follows Component Driver Development (CDD). StoryBook helps us develop components in isolation from your app, which also encourages better reusability and testability for your components. Here is quick development setup guide:

## Install
Fork/Clone the repo and install dependencies
```sh
yarn install
```

## Usage
Run storybook server and start building
```sh
yarn run storybook
```

## Build
Finally build the bundle with documentation changes
```sh
yarn run build:storybook
```

### Points to consider
* If you're adding a component then it goes into a new folder inside `src/` of `react-native-design-system`.  
* You just create a `.js` component file and a `stories.mdx` story file and write a basic component and a story.
* Now you can see the component on storybook and start building.
* If you're updating something then you can just browse to the component folder and its storybook then make changes.

## Send a PR
Create a pull request when you're done making changes. One PR should contain only one feature or bug fix. A story and a component can come along in a single PR.
